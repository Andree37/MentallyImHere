import clientPromise from '@/lib/mongo';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const client = await clientPromise;
    const db = client.db('Genipsi');
    const res = await request.json();
    const document = await db.collection('clients-quill').insertOne(res);

    return NextResponse.json({ document });
}
