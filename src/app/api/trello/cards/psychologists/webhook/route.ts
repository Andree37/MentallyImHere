import clientPromise from '@/lib/mongo';

interface trelloWebhook {
    action: { data: { listAfter: { id: string }; card: { id: string } } };
}

function extractEmail(inputString: string) {
    const emailPrefix = 'Email: ';

    // Find the index of "Email: "
    const emailIndex = inputString.indexOf(emailPrefix);

    // Check if "Email: " was found
    if (emailIndex !== -1) {
        // Extract the email substring
        const emailSubstring = inputString.substring(emailIndex + emailPrefix.length);

        // Find the end of the email (assuming it ends with a line break)
        const lineBreakIndex = emailSubstring.indexOf('\n');

        // Extract the email
        const email = lineBreakIndex !== -1 ? emailSubstring.substring(0, lineBreakIndex) : emailSubstring;

        return email.trim(); // Trim to remove leading/trailing whitespaces
    } else {
        // Return null if "Email: " was not found
        return null;
    }
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

    const email = extractEmail(card.desc);

    const client = await clientPromise;
    const db = client.db('Genipsi');

    if (acceptedPsysListId === listId) {
        await db.collection('psi').updateOne({ opp: oppCedule, email }, { $set: { approved: true } });
    } else {
        await db.collection('psi').updateOne({ opp: oppCedule, email }, { $set: { approved: false } });
    }
}
