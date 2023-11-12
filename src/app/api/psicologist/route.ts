import clientPromise from '@/lib/mongo';
import { GridFSBucket } from 'mongodb';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const client = await clientPromise;
    const db = client.db('Genipsi');

    const { fileData, fileName, fileType, ...otherData } = await req.json();

    const buffer = Buffer.from(fileData, 'base64');

    const bucket = new GridFSBucket(db);
    const uploadStream = bucket.openUploadStream(fileName, {
        contentType: fileType,
    });

    uploadStream.write(buffer, (err) => {
        if (err) {
            console.error('Error writing buffer:', err);
            return;
        }

        uploadStream.end(() => {
            console.log('File uploaded successfully.');
        });
    });

    await db.collection('psi').insertOne({ otherData, opp: uploadStream.id });

    return NextResponse.json({ data: { otherData, opp: uploadStream.id } });
}
