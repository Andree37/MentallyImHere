import clientPromise from "@/lib/mongo";

export async function POST(request: Request) {
    const client = await clientPromise;
    const db = client.db("health");
    const res = await request.json();
    await db.collection("clients").insertOne(res);

    return new Response(null, {
        status: 201,
    })
}