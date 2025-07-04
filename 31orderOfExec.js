const fs = require("node:fs");

fs.readFile(__filename, () => {
    console.log("Inside read file");
})

process.nextTick( () => console.log("NextTick"));
Promise.resolve().then( () => console.log("Promise resolve"));

for(let i=0; i<2000000; i++){
    setTimeout( () => {
        // console.log("Timeout")
        if(i === 1999999){
            console.log("Timeout")
        }
    }, 0);
}