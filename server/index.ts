import express from "express";
import http from "http";
import { Server, Socket } from "socket.io";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket: Socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("text", (updatedText: string) => {
    socket.broadcast.emit('text', updatedText);
  });
  socket.on("disconnect", () => {
    console.log(`User Disconnected: ${socket.id}`)
  })
});

io.on("connection", (socket: Socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("message", (updatedText: string) => {
    socket.broadcast.emit('message', updatedText);
  });
  socket.on("disconnect", () => {
    console.log(`User Disconnected: ${socket.id}`)
  })
});

server.listen(port, () => {
  console.log("SERVER IS RUNNING", port);
});