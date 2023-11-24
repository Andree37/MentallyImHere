import clientPromise from '@/lib/mongo';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

export async function POST(request: Request, { params }: { params: { id: string } }) {
    const client = await clientPromise;
    const db = client.db('Genipsi');

    const reqData = await request.json();
    let answers = '';
    reqData.data.forEach((item: any) => {
        for (const key in item) {
            const value = item[key];
            answers += `${key.replace(/-/g, ' ')}: ${Array.isArray(value) ? value.join(', ') : value}\n`;
        }
    });

    const updateData = { $set: { answers } };

    let result;
    if (params.id && params.id !== 'null' && params.id.length > 12) {
        result = await db.collection('clients').updateOne({ _id: new ObjectId(params.id) }, updateData);
    }

    return NextResponse.json({ result });
}
