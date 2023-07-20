import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("savori-inquiries");

        switch (req.method) {
            case "POST":
                let bodyObject = JSON.parse(req.body);
                let inquiries = await db.collection("inquiries").insertOne(bodyObject);
                res.json(inquiries.ops[0]);
                break;
            case "GET":
                const allInquiries = await db.collection("inquiries").find({}).toArray();
                res.json({ status: 200, data: allInquiries });
                break;
        }

    } catch (e) {
        console.error(e);
    }
};