import clientPromise from '@/lib/mongo';
import pgPromise from '@/lib/postg';
import { NextRequest, NextResponse } from 'next/server';
import { v4 } from 'uuid';

export async function POST(req: Request) {
    const client = await clientPromise;
    const db = client.db('Genipsi');

    const data = await req.json();

    await db.collection('psi').insertOne(data);

    try {
        const clientPG = await pgPromise;
        const psi_id = v4();

        clientPG.query(
            'INSERT INTO psis (id, name, gender, age, specialization, phone, email, location_district, location_municipality, experience_years, consultation_type, availability, cost_from, cost_to, opp, approved, preferred_fee_type) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, false, $16)',
            [
                psi_id,
                data.name,
                data.gender,
                data.age,
                data.specialization,
                data.phone,
                data.email,
                data.location,
                data.locationMunicipality,
                data.experienceYears,
                data.consultationType,
                data.availability,
                data.cost[0],
                data.cost[1],
                data.opp,
                'to-set', // needs to be set afterwards in our backoffice
            ],
            (err) => {
                if (err) {
                    console.log('error inserting into psis table', err);
                }
            },
        );
    } catch (e) {
        console.error('error inserting into psis table', e);
    }

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
    } else if (consultationPreference == 'presential') {
        filter['consultationType'] = { $in: ['Presencial'] };
    } else if (consultationPreference) {
        filter['consultationType'] = { $in: [capitalizeFirstLetter(consultationPreference)] };
    }

    filter['approved'] = true;

    const client = await clientPromise;
    const db = client.db('Genipsi');

    const documents = await db.collection('psi').find(filter).toArray();
    return NextResponse.json({ data: documents });
}
