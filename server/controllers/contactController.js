import nodemailer from "nodemailer";
import db from "../db.js";

export async function sendContact(req, res){
  const { name, email, message } = req.body;
  if(!name || !email || !message) return res.status(400).json({error:"Missing fields"});

  try {
    // Save to DB
    const [result] = await db.execute(
      "INSERT INTO contacts (name, email, message, created_at) VALUES (?, ?, ?, NOW())",
      [name, email, message]
    );

    // Send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`
    });

    res.json({ success: true, id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}
