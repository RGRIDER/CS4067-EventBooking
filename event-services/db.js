const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://mongo-db:27017/eventsDB", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB Connected!");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
