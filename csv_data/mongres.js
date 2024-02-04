const { Pool } = require('pg');
const csv = require('csv-parser');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const tables = {
    clients: [
        'id',
        'name',
        'gender',
        'age',
        'email',
        'location_district',
        'location_municipality',
        'contact_preference',
        'contact_preference_phone',
        'advertiserID',
    ],
    client_requests: [
        'id',
        'frequency',
        'price',
        'consultation_for',
        'motivation',
        'had_experience_therapy',
        'describe_experience_therapy',
        'immediate_availability',
        'other_availability',
        'availability_describe',
        'preferential_consultation_type',
        'professional_gender',
        'client_id',
    ],
    psis: [
        'id',
        'gender',
        'age',
        'specialization',
        'phone',
        'email',
        'location_district',
        'location_municipality',
        'experience_years',
        'consultation_type',
        'availability',
        'cost_from',
        'cost_to',
        'opp',
        'approved',
        'preferred_fee_type',
    ],
};

const pool = new Pool({
    connectionString: process.env.PG_URL,
});

async function insertIntoPg(table, data) {
    const client = await pool.connect();
    try {
        const columns = tables[table];
        const values = data.map((row) => {
            return `(${columns
                .map((k) => {
                    if (row[k] === null) {
                        return 'null';
                    }
                    if (!row[k] && k.toLowerCase().includes('id')) {
                        return 'null';
                    }
                    if (typeof row[k] === 'number') {
                        return row[k];
                    }
                    if (typeof row[k] === 'boolean') {
                        return `${row[k]}`;
                    }
                    return `'${row[k].trim()}'`;
                })
                .join(',')})`;
        });

        const query = `INSERT INTO ${table} (${columns.join(',')}) VALUES ${values.join(',')} ON CONFLICT DO NOTHING;`;
        console.log(query);
        await client.query(query);
    } finally {
        client.release();
    }
}

function readCsv(filePath, onData) {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => results.push(onData(data)))
            .on('end', () => resolve(results))
            .on('error', (err) => reject(err));
    });
}

async function loadClients() {
    const clients = await readCsv('clients.csv', (data) => {
        const pData = data;

        const id = uuidv4();

        return {
            id,
            name: pData.name,
            gender: 'plz fix me',
            age: +pData.age,
            email: pData.email,
            location_district: pData.location || '', // check this after to pass to district
            location_municipality: pData.location || '', // check this after to pass to municipality
            contact_preference: pData.contactFrom,
            contact_preference_phone: pData.phone,
            // other fields for client requests
            frequency: '',
            price: 0,
            consultation_for: 'self',
            motivation: pData.motivation,
            had_experience_therapy: false,
            describe_experience_therapy: '',
            immediate_availability: false,
            availability_describe: '',
            other_availability: '',
            preferential_consultation_type: pData.consultLocation,
            professional_gender: 'Any',
            advertiserID: null,
            client_id: id, // used for client_requests
        };
    });

    await insertIntoPg('clients', clients);
    await insertIntoPg('client_requests', clients);
}

async function loadClientsQuill() {
    const clients = await readCsv('clients_quill.csv', (data) => {
        const pData = parseDataString(data.data);
        if (Object.keys(pData).length === 0) {
            console.error('Something iffy:', data);
            return null;
        }

        const id = uuidv4();

        return {
            id,
            name: pData.name,
            gender: pData['auto-describe-gender'] || pData.gender[0],
            age: pData.age,
            email: pData.email,
            location_district: pData.location, // check this after to pass to district
            location_municipality: pData.location, // check this after to pass to municipality
            contact_preference: pData['contact-preference'] ? pData['contact-preference'][0] : 'phone',
            contact_preference_phone: pData['contact-preference-phone'],
            // other fields for client requests
            frequency: pData['frequency-for-other'] || pData.frequency[0],
            price: pData.price,
            consultation_for:
                pData['consultation-for-other'] || (pData['consultation-for'] && pData['consultation-for'][0]) || null,
            motivation: pData.motivation,
            had_experience_therapy:
                (pData['previous-experience-therapy'] && pData['previous-experience-therapy'][0] === 'yes') || false,
            describe_experience_therapy: pData['prev-experience-yes'],
            immediate_availability:
                (pData['immediate-availability'] && pData['immediate-availability'][0] === 'immediate') || false,
            availability_describe: pData['availability-describe'],
            other_availability: pData['immediate-availability-other'],
            preferential_consultation_type: pData['preferential-consultation-type'][0],
            professional_gender: pData['professional-gender'][0],
            advertiserID: null,
            client_id: id, // used for client_requests
        };
    });

    await insertIntoPg('clients', clients);
    await insertIntoPg('client_requests', clients);
}

async function loadPsis() {
    const psis = await readCsv('psi.csv', (data) => {
        if (!data.cost) {
            console.error('Something iffy:', data);
            return null;
        }
        const costs = JSON.parse(data.cost);

        return {
            id: uuidv4(),
            gender: data.gender,
            age: +data.age,
            specialization: data.specialization,
            phone: data.phone,
            email: data.email,
            location_district: data.location, // check this after to pass to district
            location_municipality: data.location, // check this after to pass to municipality
            experience_years: +data.experienceYears,
            consultation_type: data.consultationType,
            availability: data.availability,
            cost_from: costs[0],
            cost_to: costs[1],
            opp: data.opp,
            approved: false,
            preferred_fee_type: '',
        };
    });

    await insertIntoPg('psis', psis);
}

function parseDataString(dataString) {
    let normalizedData;
    if (dataString.startsWith('[')) {
        normalizedData = dataString.slice(1, -1).split('}, {');
    } else {
        normalizedData = [dataString];
    }

    const result = {};

    normalizedData.forEach((objStr) => {
        if (objStr === '{}' || objStr === '{}}' || !objStr.trim()) return;

        const correctedObjStr = `{${objStr.replace(/^\{?|}?$/g, '')}}`;

        correctedObjStr
            .substring(1, correctedObjStr.length - 1)
            .split(', ')
            .forEach((pair) => {
                let [key, value] = pair.split(/=(.+)/);

                key = key.replace(/^\d+(-\d+)*-/, '');

                if (value) {
                    if (value.startsWith('[') && value.endsWith(']')) {
                        result[key] = value.slice(1, -1).split(',');
                    } else if (!isNaN(value)) {
                        result[key] = Number(value);
                    } else {
                        result[key] = value;
                    }
                }
            });
    });

    return result;
}

async function run() {
    try {
        // await loadClients();
        // await loadClientsQuill();
        await loadPsis();
    } catch (e) {
        console.error(e);
    } finally {
        await pool.end();
    }
}

run()
    .then(() => console.log('Done'))
    .catch((e) => console.error(e));
