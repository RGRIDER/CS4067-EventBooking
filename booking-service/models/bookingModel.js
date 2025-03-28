const db = require('../config/db');

class Booking {
    static async createBooking(user_id, event_id) {
        const result = await db.query(
            'INSERT INTO bookings (user_id, event_id, status) VALUES ($1, $2, $3) RETURNING *',
            [user_id, event_id, 'pending']
        );
        return result.rows[0];
    }

    static async getBookingsByUser(user_id) {
        const result = await db.query(
            'SELECT * FROM bookings WHERE user_id = $1',
            [user_id]
        );
        return result.rows;
    }
}

module.exports = Booking;
