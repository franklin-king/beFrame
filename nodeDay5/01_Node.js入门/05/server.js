const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  res.setHeader("Content-Type", "text/plain;charset=utf-8");
  res.end("欢迎使用node.js");
});

server.listen(4000, () => {
  console.log("success");
});
