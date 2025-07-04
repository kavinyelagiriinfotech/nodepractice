const fs = require("node:fs");

console.log("Start");

const content = fs.readFileSync('./17file.txt', 'utf-8');
console.log(content);

console.log("Middle");
fs.readFile( "./17file.txt", "utf-8", (error, data) => {
    if(error) {
        console.log(error);
    } else {
        console.log(data);
    }
})

console.log("End")