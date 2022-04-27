// /api/contactMe

import { MongoClient } from "mongodb";
import { config } from "../../config.ts";

const url = config.DB_URI;

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(url);

    const db = client.db();

    const contactCollection = db.collection("contact");

    const result = await contactCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Message Sent!" });
  }
}

export default handler;
