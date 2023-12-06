import clientPromise from '@/lib/mongo';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: Request) {
    const client = await clientPromise;
    const db = client.db('Genipsi');

    const data = await req.json();

    await db.collection('psi').insertOne(data);

    return NextResponse.json({ data });
}

function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const psiGender = searchParams.get('psigender');
    const consultationPreference = searchParams.get('consultationPreference');
    // query is "hello" for /api/search?psigender=male&consultationPreference=no-preference

    const filter: { [k: string]: any } = {};
    if (psiGender == 'no-preference') {
        filter['gender'] = { $in: ['male', 'female'] };
    } else {
        filter['gender'] = { $in: [psiGender] };
    }

    if (consultationPreference == 'no-preference' || consultationPreference == 'mixed') {
        filter['consultationType'] = { $in: ['Ambos', 'Online', 'Presencial'] };
    } else if (consultationPreference) {
        filter['consultationType'] = { $in: [capitalizeFirstLetter(consultationPreference)] };
    }

    filter['approved'] = true;

    const client = await clientPromise;
    const db = client.db('Genipsi');

    const documents = await db.collection('psi').find(filter).toArray();
    return NextResponse.json({ data: documents });
}
