// consumer.js - RabbitMQ message listener
require("dotenv").config();
const amqp = require("amqplib");
const { sendEmail } = require("../services/emailService");

const RABBITMQ_URL = process.env.RABBITMQ_URL;
const QUEUE_NAME = process.env.QUEUE_NAME;

const consumeMessages = async () => {
    try {
        const connection = await amqp.connect(RABBITMQ_URL);
        const channel = await connection.createChannel();
        await channel.assertQueue(QUEUE_NAME, { durable: true });

        console.log("📩 Waiting for messages in queue...");

        channel.consume(QUEUE_NAME, async (msg) => {
            if (msg !== null) {
                const bookingData = JSON.parse(msg.content.toString());
                console.log("📩 Booking event received:", bookingData);

                const { user_email, event_id } = bookingData;
                if (user_email && event_id) {
                    await sendEmail(user_email, event_id);
                }
                channel.ack(msg);
            }
        });
    } catch (error) {
        console.error("❌ RabbitMQ Consumer Error:", error);
    }
};

consumeMessages();
