const fs = require("node:fs");

fs.readFile(__filename, () => {
    console.log("Inside read file");
    setImmediate( () => { 
        console.log("setImmediate")
    })
    process.nextTick( () => {
        console.log("NextTick inside I/O");
    });
    Promise.resolve().then( () => {
        console.log("Promise resolve inside I/O");
    });
})

process.nextTick( () => console.log("NextTick"));
Promise.resolve().then( () => console.log("Promise resolve"));


setTimeout( () => {
    console.log("Timeout")
}, 0);

