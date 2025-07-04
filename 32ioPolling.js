const fs = require("node:fs");

fs.readFile(__filename, () => {
    console.log("Inside read file");
})

process.nextTick( () => console.log("NextTick"));
Promise.resolve().then( () => console.log("Promise resolve"));


setTimeout( () => {
    console.log("Timeout")
}, 0);

setImmediate( () => { 
    console.log("setImmediate")
})