import clientPromise from '@/lib/mongo';
import { NextResponse } from 'next/server';

interface trelloWebhook {
    action: { data: { listAfter: { id: string | undefined }; list: { id: string | undefined }; card: { id: string } } };
}

function extractEmail(inputString: string) {
    const regex = /Email:\s*(\S+)/;
    const match = regex.exec(inputString);

    return match ? match[1] : null;
}

export async function POST(req: Request) {
    const apiKey = process.env.TRELLO_KEY;
    const trelloToken = process.env.TRELLO_TOKEN;
    const res = (await req.json()) as trelloWebhook;
    let listId = res.action.data.listAfter?.id;
    if (!listId) {
        listId = res.action.data.list?.id;
    }

    const acceptedPsysListId = '654b64f691952533bd65241d';
    const firstContactListId = '655e4275b5d9aede8814f894';

    const cardId = res.action.data.card.id;

    const cardResponse = await fetch(`https://api.trello.com/1/cards/${cardId}?key=${apiKey}&token=${trelloToken}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    });
    if (!cardResponse.ok) {
        return NextResponse.error();
    }

    const card = await cardResponse.json();
    const regex = /Cédula OPP:(\d+)/;
    const match = regex.exec(card.desc);
    if (!match) throw new Error('cannot get opp');
    const opp = match[1];

    const email = extractEmail(card.desc);
    if (!email) {
        return NextResponse.error();
    }

    const client = await clientPromise;
    const db = client.db('Genipsi');

    if (acceptedPsysListId === listId) {
        await db.collection('psi').updateOne({ opp }, { $set: { approved: true } });
    } else if (firstContactListId === listId) {
        await db.collection('psi').updateOne({ opp }, { $set: { approved: false } });
    }
}
