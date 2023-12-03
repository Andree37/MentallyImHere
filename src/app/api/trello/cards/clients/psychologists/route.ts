import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const apiKey = process.env.TRELLO_KEY;
    const trelloToken = process.env.TRELLO_TOKEN;

    const { cardID, psysSuggestion } = await req.json();

    const TRELLO_URL = `https://api.trello.com/1/cards/${cardID}/actions/comments`;

    const response = await fetch(`${TRELLO_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            text: psysSuggestion,
            key: apiKey,
            token: trelloToken,
        }),
    });
    if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.status);
    }

    const respData = await response.json();

    if (respData.status === 429) {
        return [];
    }

    return NextResponse.json({ data: respData });
}
