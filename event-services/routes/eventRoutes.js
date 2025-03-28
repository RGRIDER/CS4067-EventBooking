const express = require("express");
const {
    createEvent,
    getEvents,
    getEventById,
    checkAvailability,
} = require("../controllers/eventController");

const router = express.Router();

router.post("/", createEvent);
router.get("/", getEvents);
router.get("/:event_id", getEventById);
router.get("/:event_id/availability", checkAvailability);

module.exports = router;
