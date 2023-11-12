// Create a file called `trello-webhook.js` in your Next.js project API directory.
import { NextRequest, NextResponse } from "next/server";

type TrelloEvent = {
  type: string;
  data: {
    card: {
      idColumn: string;
    };
  };
};

const TRELLO_COLUMN_ID = process.env.TRELLO_COLUMN_ID;
const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS;
const apiKey = process.env.TRELLO_KEY;
const trelloToken = process.env.TRELLO_TOKEN;
const trelloClientBoardId = process.env.TRELLO_CLIENT_BOARD;

export default async function handler(req: NextRequest, res: NextResponse) {
  // Get the Trello webhook event data.
  const event = req.body;
  const trelloEvent = event as TrelloEvent;
  // Check the event type.
  if (
    trelloEvent.type === "cardMoved" &&
    trelloEvent.data.card.idColumn === TRELLO_COLUMN_ID
  ) {
    // Get the card data.
    const card = trelloEvent.data.card;

    // Find all cards on "Approved Advertisers" column

    // Filter for one that includes the ID on the title that it's the ID on advertiser ID of client card that was moved

    // Add a comment on the advertiser card with the client ID for reference

    // Ignore the event.
    res.status(200).json({
      message: "Webhook received successfully.",
    });
  }
}

export async function POST(req: NextRequest) {
  const response = await fetch(
    `https://api.trello.com/1/tokens/${trelloToken}/webhooks/?key=${apiKey}"`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: `Avertiser fee`,
        callbackURL: ``,
        idModel: trelloClientBoardId,
      }),
    }
  );
  return response;
}
