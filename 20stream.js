const fs = require("node:fs");

const readableStream = fs.createReadStream("./17file.txt", {
    encoding: "utf-8",
    highWaterMark: 4, // Used to extaract code in mentioned bit size
});

const WritableStream = fs.createWriteStream("./21filecopy.txt");

readableStream.on("data", (chunk) => {
    console.log(chunk);
    WritableStream.write(chunk)
})