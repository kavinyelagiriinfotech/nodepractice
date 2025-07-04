const fs = require("node:fs");
const zlib = require("node:zlib");

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream("./17file.txt", {
    encoding: "utf-8",
    highWaterMark: 4, // Used to extaract code in mentioned bit size
});

readableStream.pipe(gzip).pipe(fs.WriteStream("./21filecopy.txt.gz"))

const WritableStream = fs.createWriteStream("./21filecopy.txt");

readableStream.pipe(WritableStream);
// readableStream.on("data", (chunk) => {
//     console.log(chunk);
//     WritableStream.write(chunk)
// })