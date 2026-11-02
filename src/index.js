// app.use("/api/posts", postRoutes);
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";

const app = express();

const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("My Backend Server is Running!");
});

// User routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// Start server
const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Server failed:", error.message);
    }
};

startServer();
