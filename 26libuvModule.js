const fs = require("node:fs");

fs.readFile("./17file.txt", "utf-8", (error, data) => {
  console.log(data);
  console.log("Inside readfile");
});

console.log("After readfile");
