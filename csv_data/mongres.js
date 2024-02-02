const { Pool } = require('pg');
const csv = require('csv-parser');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.PG_URL,
});

async function insertIntoPg(table, data) {
    const client = await pool.connect();
    try {
        const columns = Object.keys(data[0]);
        const values = data.map(
            (d) =>
                `(${Object.values(d)
                    .map((val) => `'${val}'`)
                    .join(',')})`,
        );
        const query = `INSERT INTO ${table} (${columns.join(',')}) VALUES ${values.join(
            ',',
        )} ON CONFLICT (id) DO NOTHING`;
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
        console.log(data);

        return {
            id: uuidv4(),
            name: '',
            gender: '',
            age: 0,
            email: '',
            location_district: '',
            location_municipality: '',
            contact_preference: '',
            contact_preference_phone: '',
            // other fields for client requests
            frequency: '',
            price: 0,
            consultation_for: '',
            motivation: '',
            had_experience_therapy: '',
            describe_experience_therapy: '',
            immediate_availability: false,
            availability_describe: '',
            other_availability: '',
            preferential_consultation_type: '[]',
            professional_gender: '[]',
            advertiserID: null,
        };
    });
    console.log(clients.length);
    //await insertIntoPg('clients', clients);
}

async function loadClientsQuill() {
    const clients = await readCsv('clients_quill.csv', (data) => {
        const pData = parseDataString(data.data);
        if (Object.keys(pData).length === 0) return;

        return {
            id: uuidv4(),
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
            preferential_consultation_type: pData['preferential-consultation-type'], // this is an array, fix it after
            professional_gender: pData['professional-gender'], // this is an array, fix it after
            advertiserID: null,
        };
    });

    console.log(clients.length);

    //await insertIntoPg('clients', clients);
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
    console.log(psis.length);
    // await insertIntoPg('psis', psis);
}

function parseDataString(dataString) {
    // Normalize input to an array format
    let normalizedData;
    if (dataString.startsWith('[')) {
        // Remove the leading and trailing square brackets and split
        normalizedData = dataString.slice(1, -1).split('}, {');
    } else {
        // Wrap the single string in an array for uniform processing
        normalizedData = [dataString];
    }

    const result = {};

    normalizedData.forEach((objStr) => {
        // Handle empty objects or improperly formatted strings
        if (objStr === '{}' || objStr === '{}}' || !objStr.trim()) return;

        // Ensure each object string is correctly formatted
        const correctedObjStr = `{${objStr.replace(/^\{?|}?$/g, '')}}`;

        // Split into key-value pairs
        correctedObjStr
            .substring(1, correctedObjStr.length - 1)
            .split(', ')
            .forEach((pair) => {
                let [key, value] = pair.split(/=(.+)/);

                // Clean the key of numeric prefixes
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
        await loadClients();
        await loadClientsQuill();
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
