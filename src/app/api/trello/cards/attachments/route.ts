import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const apiKey = process.env.TRELLO_KEY;
    const trelloToken = process.env.TRELLO_TOKEN;

    const TRELLO_URL = `https://api.trello.com/1/cards?key=${apiKey}&token=${trelloToken}`;

    const { name, email, phone, specialization, location, experienceYears, consultationType, availability, cost, opp } =
        await req.json();

    const response = await fetch(`${TRELLO_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: `New Psychologist: ${name}`,
            desc: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSpecialization: ${specialization}\nLocation: ${location}\nExperience Years: ${experienceYears}\nConsultation Type: ${consultationType}\nAvailability: ${availability}\nCost: ${cost}\nCédula OPP:${opp}`,
            idList: '651fe040adbc46b5976d294e',
        }),
    });
    if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.status);
    }

    const data = await response.json();

    return NextResponse.json({ data });
}
