const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    id: { type: Number, unique: true, required: true },
    name: String,
    date: String,
    location: String,
    availableTickets: Number,
});

module.exports = mongoose.model("Event", eventSchema);
