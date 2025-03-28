const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const bookingRoutes = require('./routes/bookingRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/bookings', bookingRoutes);

app.get('/', (req, res) => {
    res.send('Booking Service is running');
});

module.exports = app;
