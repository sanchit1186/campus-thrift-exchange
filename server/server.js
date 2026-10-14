require("dotenv").config();
console.log("MONGO_URI:", process.env.MONGO_URI);
const express = require("express");

const mongoose = require("mongoose");

const app = express();
app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
    });
const PORT = process.env.PORT || 5000;

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "Campus Thrift backend is running"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});