import { NextResponse } from 'next/server';

export async function POST(req: Request, { params }: { params: { id: string } }) {
    const apiKey = process.env.TRELLO_KEY;
    const trelloToken = process.env.TRELLO_TOKEN;
    const boardID = '651b50d48c9594cb06110224';

    const reqData = await req.json();

    let answers = '';
    reqData.data.forEach((item: any) => {
        for (const key in item) {
            const value = item[key];
            answers += `${key.replace(/-/g, ' ')}: ${Array.isArray(value) ? value.join(', ') : value}\n`;
        }
    });

    const TRELLO_URL = `https://api.trello.com/1/search?query=${params.id}&key=${apiKey}&token=${trelloToken}&idBoards=${boardID}&modelTypes=cards&card_fields=all`;
    const response = await fetch(`${TRELLO_URL}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        return NextResponse.error();
    }

    const data = await response.json();

    if (data.status === 429) {
        NextResponse.json({ data: [] });
    }
    if (data.cards && data.cards.length > 0) {
        const COMMENT_TRELLO_URL = `https://api.trello.com/1/cards/${data.cards[0].id}/actions/comments`;

        const response = await fetch(`${COMMENT_TRELLO_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: answers,
                key: apiKey,
                token: trelloToken,
            }),
        });
        if (!response.ok) {
            return NextResponse.error();
        }

        const finalData = await response.json();
        return NextResponse.json({ data: finalData });
    }
    return NextResponse.json(null);
}
