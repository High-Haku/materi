// module http
const http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>ini skilvul</h1>");
    res.write(req.url);
    res.end();
  })
  .listen(8000);

// timer
// const settimeout = require('timers')
// const myFunction = (arg) => {
//   console.log(`arg was => ${arg}`);
// };
// setTimeout(myFunction, 5000, "tes");

// import { readFileSync } from "fs";
// const fs = require("fs");

// fs.writeFile("skilvul.txt", "Membuat file menggunakan node js", function (err) {
//   if (err) throw error;
//   console.log("Success");
// });

// const dataFile = fs.readFileSync("./file.txt", { encoding: "utf8" });

// console.log(dataFile);
// var os = require("os");
// console.log("platform" + os.type());
