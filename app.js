const express = require("express");
const { createServer } = require("node:http");
const path = require("path");
const app = express();
const { Server } = require("socket.io");

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
//app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

io.on("connection", (socket) => {
  console.log("A user is connected");
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
