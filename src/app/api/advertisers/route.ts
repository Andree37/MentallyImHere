import clientPromise from '@/lib/mongo';
import { NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import pgPromise from '@/lib/postg';
import { v4 } from 'uuid';

export async function POST(req: Request) {
    const client = await clientPromise;
    const db = client.db('Genipsi');

    const { name, email, phone, iban, socialNetwork } = await req.json();

    const data = await db
        .collection('advertisers')
        .insertOne({ name, email, phone, iban, socialNetwork, registrationDate: Date.now() });

    try {
        const pgClient = await pgPromise;
        const id = v4();
        pgClient.query(
            'INSERT INTO advertisers (id, name, email, phone, social_media, iban) VALUES ($1, $2, $3, $4, $5, $6)',
            [id, name, email, phone, socialNetwork, iban],
            (err) => {
                if (err) {
                    console.log('Error inserting advertiser into Postgres', err);
                }
            },
        );
    } catch (e) {
        console.error('Error inserting advertiser into Postgres', e);
    }

    return NextResponse.json({ data });
}

export async function GET(req: NextRequest) {
    const client = await clientPromise;
    const db = client.db('Genipsi');

    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('id');
    if (id && id !== 'null') {
        try {
            const filter = { _id: new ObjectId(id) };

            const data = await db.collection('advertisers').findOne(filter);
            return NextResponse.json({ data });
        } catch (e) {
            return NextResponse.json({ data: null });
        }
    }
    return NextResponse.json({ data: null });
}
