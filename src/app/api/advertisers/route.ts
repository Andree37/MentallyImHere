import clientPromise from "@/lib/mongo";
import {NextResponse} from "next/server";

export async function POST(req: Request) {
    const client = await clientPromise;
    const db = client.db("Genipsi");

    const {name, email, phone, iban, socialNetwork} = await req.json();

    const data = await db.collection("advertisers").insertOne({name, email, phone, iban, socialNetwork});

    return NextResponse.json({data})
}
