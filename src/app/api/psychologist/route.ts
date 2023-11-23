import clientPromise from '@/lib/mongo';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const client = await clientPromise;
    const db = client.db('Genipsi');

    const data = await req.json();

    await db.collection('psi').insertOne(data);

    return NextResponse.json({ data });
}
