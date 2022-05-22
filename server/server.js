require("dotenv").config();
const express = require("express");
const {Server} = require("socket.io");
const cors = require("cors");
const http = require("http");
const router = require("./router");
const port = process.env.PORT || 8000;

const app = express();
const server = http.createServer(app);
const io = new Server(server,{
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});



app.use(express.json());
app.use(cors({origin:true}));
app.use(router);

io.on("connect", (socket) => {
  console.log("User connected now");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(port, () => {
  console.log("started", port);
});
