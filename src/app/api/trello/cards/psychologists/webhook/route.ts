import clientPromise from '@/lib/mongo';

interface trelloWebhook {
    action: { data: { listAfter: { id: string }; card: { id: string } } };
}

export async function POST(req: Request, response: Response) {
    const apiKey = process.env.TRELLO_KEY;
    const trelloToken = process.env.TRELLO_TOKEN;
    const res = (await req.json()) as trelloWebhook;
    const listId = res.action.data.listAfter.id;

    const acceptedPsysListId = '654b64f691952533bd65241d';

    const cardId = res.action.data.card.id;

    const cardResponse = await fetch(`https://api.trello.com/1/cards/${cardId}?key=${apiKey}&token=${trelloToken}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    });
    if (!cardResponse.ok) {
        return;
    }

    const card = await cardResponse.json();
    const regex = /Cédula OPP:(\d+)/;
    const match = regex.exec(card.desc);
    if (!match) return;
    const oppCedule = match[1];

    const client = await clientPromise;
    const db = client.db('Genipsi');

    if (acceptedPsysListId === listId) {
        await db.collection('psi').updateOne({ opp: oppCedule }, { $set: { approved: true } });
    } else {
        await db.collection('psi').updateOne({ opp: oppCedule }, { $set: { approved: false } });
    }
}
