const { Server } = require("socket.io");

const setupSockets = (server, mongoose) => {
    const io = new Server(server, { cors: { origin: "*" } });

    io.on("connection", (socket) => {
        console.log("WebSocket client connected");

        socket.on("disconnect", () => {
            console.log("WebSocket client disconnected");
        });
    });

    // MongoDB Change Stream
    const userCollection = mongoose.connection.collection("users");
    const changeStream = userCollection.watch();

    changeStream.on("change", (change) => {
        console.log("Database Change Detected:", change);
        io.emit("databaseUpdate", change);
    });

    return io;
};

module.exports = setupSockets;
