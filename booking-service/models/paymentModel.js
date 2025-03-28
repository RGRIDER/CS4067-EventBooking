const db = require('../config/db');

class Payment {
    static async createPayment(user_id, amount) {
        const result = await db.query(
            'INSERT INTO payments (user_id, amount, status) VALUES ($1, $2, $3) RETURNING *',
            [user_id, amount, 'pending']
        );
        return result.rows[0];
    }
}

module.exports = Payment;
