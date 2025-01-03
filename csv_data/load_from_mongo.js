const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    console.error('MONGODB_URI environment variable is not set.');
    process.exit(1);
}

async function exportAllCollections() {
    const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Connect to the database
        await client.connect();
        console.log('Connected to MongoDB.');

        const db = client.db('Genipsi');

        // Get all collections in the database
        const collections = await db.listCollections().toArray();

        if (collections.length === 0) {
            console.log('No collections found in the database.');
            return;
        }

        // Create an output directory for the exported data
        const outputDir = path.resolve(__dirname, 'exported_data');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir);
        }

        for (const collection of collections) {
            const collectionName = collection.name;
            console.log(`Exporting data from collection: ${collectionName}`);

            const data = await db.collection(collectionName).find({}).toArray();

            const filePath = path.join(outputDir, `${collectionName}.json`);
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

            console.log(`Data from collection ${collectionName} exported to ${filePath}`);
        }

        console.log('All collections have been exported.');
    } catch (err) {
        console.error('Error exporting collections:', err);
    } finally {
        await client.close();
        console.log('MongoDB connection closed.');
    }
}

exportAllCollections();
