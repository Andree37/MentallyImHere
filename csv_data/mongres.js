const { Pool } = require('pg');
const csv = require('csv-parser');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { data } = require('autoprefixer');
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
    const clients = await readCsv('clients.csv', (data) => ({
        id: uuidv4(),
        age: data.age,
        email: data.email,
        // ... other fields ...
    }));
    console.log(clients);
    //await insertIntoPg('clients', clients);
}

/*
{
  'preferential-consultation-type': [ 'mixed' ],
  'professional-gender': [ 'no-preference' ],
}
 */
async function loadClientsQuill() {
    const clients = await readCsv('clients_quill.csv', (data) => {
        console.log(`data: ${data.data}`);
        const pData = parseDataString(data.data);
        console.log(`pData: ${JSON.stringify(pData)}`);
        if (Object.keys(pData).length === 0) return;
        return {
            id: uuidv4(),
            name: pData.name,
            gender: pData['auto-describe-gender'] || pData.gender[0],
            age: pData.age,
            email: pData.email,
            location_district: pData.location, // check this after
            location_municipality: pData.location, // check this after
            contact_preference: pData['contact-preference'] ? pData['contact-preference'][0] : 'phone',
            contact_preference_phone: pData['contact-preference-phone'],
            // other fields for client requests
            frequency: pData['frequency-for-other'] || pData.frequency[0],
            price: pData.price,
            consultation_for: pData['consultation-for-other'] || pData['consultation-for'][0],
            motivation: pData.motivation,
            had_experience_therapy: pData['previous-experience-therapy'][0] === 'yes',
            describe_experience_therapy: pData['prev-experience-yes'],
            immediate_availability: pData['immediate-availability'][0] === 'immediate',
            availability_describe: pData['availability-describe'],
            when_availability: pData['immediate-availability-other'],
            preferential_consultation_type: pData['preferential-consultation-type'], // this is an array, fix it after
            professional_gender: pData['professional-gender'], // this is an array, fix it after
            advertiserID: null,
        };
    });

    //await insertIntoPg('clients', clients);
}

async function loadPsis() {
    const psis = await readCsv('psi.csv', (data) => ({
        id: uuidv4(),
        age: data.age,
        email: data.email,
        // ... other fields ...
    }));
    console.log(psis);
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
        // await loadClients();
        await loadClientsQuill();
        // await loadPsis();
    } catch (e) {
        console.error(e);
    } finally {
        await pool.end();
    }
}

run();
