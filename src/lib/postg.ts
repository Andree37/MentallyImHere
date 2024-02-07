import { Pool } from 'pg';

const connectionString = process.env.PG_URL;

if (!connectionString) {
    throw new Error('Add Postgres URI to .env.local');
}

const pool = new Pool({
    connectionString,
});

const clientPromise = pool.connect();

export default clientPromise;
