require("dotenv").config();
const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");
const http = require("http");
const router = require("./router");
const port = process.env.PORT || 8000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.json());
app.use(cors());
app.use(router);
server.listen(port, () => {
  console.log("started",port);
});
