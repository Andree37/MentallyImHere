import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const apiKey = process.env.TRELLO_KEY;
    const trelloToken = process.env.TRELLO_TOKEN;

    const TRELLO_URL = `https://api.trello.com/1/cards?key=${apiKey}&token=${trelloToken}`;

    const { name, email, phone, socialNetwork, iban, id, link } = await req.json();

    const response = await fetch(`${TRELLO_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: `New Advertiser: ${name} - ${id}`,
            desc: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSocialNetwork: ${socialNetwork}\nIBAN: ${iban}\nLink: ${link}`,
            idList: '654ab657c055755149783e3e',
        }),
    });
    if (!response.ok) {
        NextResponse.error();
    }

    const data = await response.json();

    if (data.status === 429) {
        NextResponse.json({ data: [] });
    }

    return NextResponse.json({ data });
}
