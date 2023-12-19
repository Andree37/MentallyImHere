import clientPromise from '@/lib/mongo';
import { NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

export async function POST(req: Request) {
    const client = await clientPromise;
    const db = client.db('Genipsi');

    const { name, email, phone, iban, socialNetwork } = await req.json();

    const data = await db
        .collection('advertisers')
        .insertOne({ name, email, phone, iban, socialNetwork, registrationDate: Date.now() });

    return NextResponse.json({ data });
}

export async function GET(req: NextRequest) {
    const client = await clientPromise;
    const db = client.db('Genipsi');

    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('id');
    const filter = id && id !== 'null' ? { _id: new ObjectId(id) } : {};

    const data = await db.collection('advertisers').findOne(filter);

    return NextResponse.json({ data });
}
