import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongo';

export async function GET(req: NextRequest) {
    const client = await clientPromise;
    const db = client.db('Genipsi');

    const searchParams = req.nextUrl.searchParams;
    const adv_id = searchParams.get('id');
    const filter: any = adv_id && adv_id !== 'null' ? { advertiserID: adv_id } : {};

    filter['found_consultation'] = { $in: [null, false] }; // either it doesn't have the field, or this field is false

    const data = await db.collection('clients-quill').findOne(filter);

    return NextResponse.json({ data });
}
