const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Booking routes
router.post('/', bookingController.createBooking);
router.get('/:userId', bookingController.getBookingsByUser);

// Payment routes
router.post('/payment', bookingController.processPayment);

module.exports = router;
