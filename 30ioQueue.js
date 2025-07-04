const fs = require("node:fs");

setTimeout( () => {
    console.log("Inside timeout");
}, 0)

fs.readFile(__filename, () => {
    console.log("Inside the read file")
})

setTimeout( () => {
    console.log("Inside timeout - 2");
}, 0)

// process.nextTick( () => {
//     console.log("Inside NextTick");
// })

// Promise.resolve().then( () => {
//     console.log("Inside promise")
// })

