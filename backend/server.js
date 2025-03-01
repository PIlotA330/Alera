const express = require("express");
const http = require("http"); // Required for socket.io
const { Server } = require("socket.io"); // WebSocket server
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");

dotenv.config();

// Initialize Express and HTTP server
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*", // Adjust this for security in production
    },
});

app.use(express.json()); // Middleware to parse JSON

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB Connected...");
}).catch(err => console.error("MongoDB Connection Error: ", err));

// Handle client connection
io.on("connection", (socket) => {
    console.log("New WebSocket client connected");

    socket.on("disconnect", () => {
        console.log("WebSocket client disconnected");
    });
});

// Listen for real-time updates using MongoDB Change Streams
const userCollection = mongoose.connection.collection("users");

const changeStream = userCollection.watch();
changeStream.on("change", (change) => {
    console.log("Database Change Detected:", change);
    io.emit("databaseUpdate", change); // Send the update to all connected clients
});

// Routes

// GET all users
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
});

// POST a new user
app.post("/users", async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
