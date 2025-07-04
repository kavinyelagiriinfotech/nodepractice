const fs = require("node:fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close", () => {
    console.log("Inside Listner!");
})

setTimeout( () => console.log("Timeout"));
setImmediate( () => console.log("Immediate"));

process.nextTick( () => console.log("Inside Nexttick"));
Promise.resolve().then(() => console.log("Promise resolve"));

