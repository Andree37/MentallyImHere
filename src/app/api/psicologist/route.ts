import clientPromise from "@/lib/mongo";

export async function POST(request: Request) {
    const client = await clientPromise;
    const db = client.db("Genipsi");
    const res = await request.json();
    await db.collection("psi").insertOne(res);

    return new Response(null, {
        status: 201,
    })
}
