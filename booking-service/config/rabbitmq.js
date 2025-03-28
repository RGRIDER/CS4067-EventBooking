const amqp = require('amqplib');
require('dotenv').config();

const RABBITMQ_URL = process.env.RABBITMQ_URL;

async function sendToQueue(queue, message) {
    try {
        const connection = await amqp.connect(RABBITMQ_URL);
        const channel = await connection.createChannel();

        await channel.assertQueue(queue, { durable: true });
        channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), { persistent: true });

        console.log(`Message sent to ${queue}:`, message);

        setTimeout(() => {
            connection.close();
        }, 500);
    } catch (error) {
        console.error('RabbitMQ Error:', error);
    }
}

module.exports = { sendToQueue };
