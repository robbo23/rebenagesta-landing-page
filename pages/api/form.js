import { sendEmail } from 'utils/email-server';

export default async function handler(req, res) {
  const { name, email, phone, message } = req.body;

  const data = await sendEmail({
    name: name,
    from: email,
    to: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    subject: `Wiadomość z Landing Page od – ${name}`,
    text: `
      Imię i nazwisko: ${name}
      Email: ${email}
      Telefon: ${phone}
      
      Wiadomość:
      ${message}      
    `
  });

  if (data.messageId) {
    res.status(200).json({ success: true });
  } else {
    res.status(500).json({ success: false });
  }
}
