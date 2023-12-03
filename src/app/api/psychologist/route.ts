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

    console.log('filter', filter);

    const client = await clientPromise;
    const db = client.db('Genipsi');

    const documents = await db.collection('psi').find(filter).toArray();
    console.log('document', documents);
    return NextResponse.json({ data: documents });
}

/**
 * 
 * [
  {
    _id: new ObjectId("6555de0a87f60eb4558065ae"),
    name: 'Bruno Pereira Gomes',
    age: 46,
    specialization: 'Psicólogo Clínico, Educacional e Psicoterapeuta de Orientação Integrativa',
    phone: '+351 961213055',
    email: 'bruno.psi@gmail.com',
    location: 'Lisboa',
    experienceYears: 22,
    consultationType: 'Online',
    availability: 'Disponibilidade imediata, de segunda a sexta e sábado de manhã',
    cost: [ 30, 50 ],
    opp: '04353',
    gender: 'male'
  },
  {
    _id: new ObjectId("655ccdbe5d29c84f60a4d0a5"),
    name: 'Francisco Mano',
    age: 26,
    specialization: 'Psicologia Clínica Cognitiva-Comportamental',
    phone: '+351 914807017',
    email: 'flm.psic@gmail.com',
    location: 'Agualva-Cacém ou Lisboa (Saldanha)',
    experienceYears: 2,
    consultationType: 'Online',
    availability: 'Manhãs (todas de terça a sexta) - 10h às 13h\n' +
      'Tardes: terça e quinta (14h às 20h) e quarta e sexta (alguns horários das 14h às 17h)',
    cost: [ 20, 40 ],
    opp: '27949',
    gender: 'male'
  }
]
 */
