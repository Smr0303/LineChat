require("dotenv").config();
const express = require("express");
const { Server } = require("socket.io");
const cors = require("cors");
const http = require("http");
const router = require("./router");
const port = process.env.PORT || 8000;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

app.use(express.json());
app.use(cors({ origin: true }));

app.use(router);

io.on("connect", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    socket.join(room);
    if (error) {
      return callback(error);
    }
    socket.emit("message", {
      user: "admin",
      text: `${user.name},welcome to the room ${user.room}`,
    });

    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} has joined!` });
    console.log("Joining it", user.room);
    callback();
  });

  socket.on("sendMessage", (message) => {
    console.log("send", message);
    const user = getUser(socket.id);
    console.log(user, "message");
    io.to(user.room).emit("message", { user: user.name, text: message });
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: "Admin",
        text: `${user.name} has left.`,
      });
    }
  });
});

server.listen(port, () => {
  console.log("started", port);
});
