import {NextResponse} from "next/server";

export async function POST(req: Request) {
    const apiKey = process.env.TRELLO_KEY;
    const trelloToken = process.env.TRELLO_TOKEN;

    const TRELLO_URL = `https://api.trello.com/1/cards?key=${apiKey}&token=${trelloToken}`;

    const {
        name,
        age,
        email,
        phone,
        motivation,
        id,
        contactFrom,
        consultLocation,
        location,
        advertiserID
    } = await req.json();

    const response = await fetch(`${TRELLO_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: `New User: ${name} - ${id}`,
            desc: `Name: ${name}\nAge: ${age}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${motivation}\nContactar por: ${contactFrom}\nConsulta: ${consultLocation}\nLocalização: ${location}\nAdvertiserID: ${advertiserID}`,
            idList: '651b50da8e3027a3df31fbb4',
        }),
    });
    if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.status);
    }

    const data = await response.json();

    if (data.status === 429) {
        return [];
    }

    return NextResponse.json({data})
}
