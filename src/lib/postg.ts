import { Pool } from 'pg';

const connectionString = process.env.PG_URL;

if (!connectionString) {
    throw new Error('Add Postgres URI to .env');
}

const pool = new Pool({
    connectionString,
});

const pgPromise = pool.connect();

export default pgPromise;
