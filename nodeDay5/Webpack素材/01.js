const fs = require("fs");

fs.writeFile("./read.txt", "hello,node.js", (err) => {
  if (err) console.log(err);
  else console.log("写入成");
});
fs.readFile("./read.txt", (err, data) => {
  if (err) console.log(err);
  else console.log(data.toString());
});
