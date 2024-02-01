const { Pool } = require('pg');
const csv = require('csv-parser');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// PostgreSQL Connection
const pool = new Pool({
    user: 'your_user',
    host: 'localhost',
    database: 'your_postgres_db',
    password: 'your_password',
    port: 5432,
});

// Function to insert data into PostgreSQL
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

// Function to read and parse CSV file
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

// Function to transform and load 'clients' data from CSV to PostgreSQL
async function loadClients() {
    const clients = await readCsv('path_to_clients_csv.csv', (data) => ({
        id: uuidv4(),
        age: data.age,
        email: data.email,
        // ... other fields ...
    }));

    await insertIntoPg('clients', clients);
}

// Function to transform and load 'psis' data from CSV to PostgreSQL
async function loadPsis() {
    const psis = await readCsv('path_to_psis_csv.csv', (data) => ({
        id: uuidv4(),
        age: data.age,
        email: data.email,
        // ... other fields ...
    }));

    await insertIntoPg('psis', psis);
}

async function run() {
    try {
        await loadClients();
        await loadPsis();
    } catch (e) {
        console.error(e);
    } finally {
        await pool.end();
    }
}

await run();
