import { MongoClient } from "mongodb";
import { config } from "../../config.ts";

const url = config.DB_URI;
// /api/contactMe

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      url //"mongodb+srv://baolson:2022Treats!@cluster0.5cvbh.mongodb.net/contact?retryWrites=true&w=majority"
    );

    const db = client.db();

    const contactCollection = db.collection("contact");

    const result = await contactCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Message Sent!" });
  }
}

export default handler;
