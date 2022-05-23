// /api/contactMe

import { MongoClient } from "mongodb";
import { config } from "../../config.ts";

const mail = require("@sendgrid/mail");

const url = config.DB_URI;
const APIKey = config.EMAIL_KEY;
const senderEmail = config.SENDER_EMAIL;
const receiverEmail = config.RECEIVER_EMAIL;

mail.setApiKey(APIKey);

async function handler(req, res) {
  if (req.method === "POST") {
    //log info into DB
    const data = req.body;
    const client = await MongoClient.connect(url);
    const db = client.db();
    const contactCollection = db.collection("contact");
    const result = await contactCollection.insertOne(data);
    client.close();

    //send email
    const body = req.body;
    const msg = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}`;

    const emailData = {
      to: receiverEmail,
      from: senderEmail,
      subject: `PORTFOLIO-contact from ${body.name}`,
      text: msg,
      html: msg.replace(/\r\n/g, "<br/>"),
    };

    try {
      await mail.send(emailData);
      return res.status(200).json({ status: "OK" });
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }
}

export default handler;
