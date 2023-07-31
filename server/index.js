const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const port = 3001;

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("message", (updatedText) => {
    socket.broadcast.emit('message', updatedText);
  });
  socket.on("disconnect", () => {
    console.log(`User Disconnected: ${socket.id}`)
  })
});

server.listen(port, () => {
  console.log("SERVER IS RUNNING", port);
});