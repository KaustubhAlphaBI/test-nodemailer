import "dotenv/config";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  logger: true,
  debug: true,
  auth: {
    user: process.env.USERNAME,
    pass: process.env.PASSWORD,
  },
});

async function verifyTransporter() {
  try {
    await transporter.verify();
    console.log("Server is ready to take our messages");
  } catch (error) {
    console.log("Error:", error);
  }
}

async function sendEmail() {
  const mailOptions = {
    from: process.env.SEND_EMAIL_ID,
    to: "kaustubh.agrawal@alphabi.co",
    subject: "Test email",
    text: "Hello, this is a test email.",
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.log("Error:", error);
  }
}

// Verify the transporter and send an email
(async () => {
  await verifyTransporter();
  await sendEmail();
})();
