// emailService.js - Handles sending emails
require("dotenv").config();
const nodemailer = require("nodemailer");

// Create transporter with secure credentials
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // Use TLS
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

const sendEmail = async (to, bookingId) => {
    const mailOptions = {
        from: process.env.SMTP_USER,
        to: to,
        subject: "Booking Confirmation",
        text: `Your booking with ID ${bookingId} has been confirmed.`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`✅ Email sent successfully to ${to}`);
    } catch (error) {
        console.error(`❌ Failed to send email to ${to}:`, error);
    }
};

module.exports = { sendEmail };