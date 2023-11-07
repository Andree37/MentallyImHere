import {NextResponse} from "next/server";

export async function GET(_: Request) {
    const apiKey = process.env.TRELLO_KEY;
    const trelloToken = process.env.TRELLO_TOKEN;
    const boardID = 'iogCDnfQ';

    const trelloURL = `https://api.trello.com/1/boards/${boardID}/lists?key=${apiKey}&token=${trelloToken}`;

    const response = await fetch(`${trelloURL}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();

    if (data.status === 429) {
        return [];
    }

    console.log(data)

    return NextResponse.json({data})

}
