const Booking = require('../models/bookingModel');
const Payment = require('../models/paymentModel');
const rabbitmq = require('../config/rabbitmq');

exports.createBooking = async (req, res) => {
    try {
        const { user_id, event_id } = req.body;
        const booking = await Booking.createBooking(user_id, event_id);

        // Send booking confirmation message to RabbitMQ
        await rabbitmq.sendToQueue('booking_notifications', {
            user_id,
            event_id,
            status: 'confirmed'
        });

        res.status(201).json({ success: true, booking });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.getBookingsByUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const bookings = await Booking.getBookingsByUser(userId);
        res.json({ success: true, bookings });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.processPayment = async (req, res) => {
    try {
        const { user_id, amount } = req.body;
        const payment = await Payment.createPayment(user_id, amount);

        // Send payment message to RabbitMQ
        await rabbitmq.sendToQueue('payment_notifications', {
            user_id,
            amount,
            status: 'processed'
        });

        res.status(201).json({ success: true, payment });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
