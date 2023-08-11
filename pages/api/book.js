import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("savori-bookings");

        switch (req.method) {
            case "POST":
                let bodyObject = JSON.parse(req.body);
                let bookings = await db.collection("bookings").insertOne(bodyObject);
                res.json(bookings.ops[0]);
                break;
            case "GET":
                const allbookings = await db.collection("bookings").find({}).toArray();
                res.json({ status: 200, data: allbookings });
                break;
        }

    } catch (e) {
        console.error(e);
    }
};