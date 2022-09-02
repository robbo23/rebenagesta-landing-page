import nodemailer from 'nodemailer';

export const sendEmail = async ({ from, to, subject, text, html, attachments, name }) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.dpoczta.pl',
    port: 587,
    secure: false,
    auth: {
      user: `${process.env.EMAIL_USER}`, // generated ethereal user
      pass: `${process.env.EMAIL_PASSWORD}` // generated ethereal password
    }
  });

  return await transporter.sendMail({
    from: `Landing Page – ${name} <${process.env.EMAIL_USER}>`,
    replyTo: from,
    to,
    subject,
    text,
    attachments,
    html
  });
};
