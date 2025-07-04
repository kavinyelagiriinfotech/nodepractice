// const http = require('http');

// const server = http.createServer((req, res) => {
//     const fullName = {
//         firstName: "Kavin",
//         lastName: "Manudheeran"
//     };

//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(fullName));                         
// });

// server.listen(3000);



// const http = require("node:http")

// const server = http.createServer( (req, res) => {
//     res.writeHead(200);
//     res.end("Hello Manudheeren");
// })

// server.listen( 3000, () => {
//     console.log("Running on the port 3000");
// })



// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set status and headers
//     res.write("Hello ");                                   // Write part of body
//     res.write("Manudheeren\n");                            // Write another part
//     res.end("This is the end.\n");                         // Final write and end
// });

// server.listen(3000);



const http = require("node:http")

const server = http.createServer( (req, res) => {
    res.writeHead(200, {"content-type": "text/html"});
    res.end("<h1>Hello Manudheeren<h1>");
})

server.listen( 3000, () => {
    console.log("Running on the port 3000");
})


// const http = require("node:http")
// const fs = require('node:fs');

// const server = http.createServer( (req, res) => {
//     res.writeHead(200, {"content-type": "text/html"});
//     // const html = fs.readFileSync("./23sample.html").pipe(res);
//     const html = fs.readFileSync(__dirname + "/23sample.html").pipe(res);
//     res.end(html);
// })

// server.listen( 3000, () => {
//     console.log("Running on the port 3000");
// })


// const http = require("node:http")
// const fs = require('node:fs');

// const server = http.createServer( (req, res) => {
//     const name = "Kavin"
//     res.writeHead(200, {"content-type": "text/html"});
//     let html = fs.readFileSync("./23sample.html");
//     html = html.replace("{{name}}", name); //TypeError: html.replace is not a function
//     res.end(html);
// })

// server.listen( 3000, () => {
//     console.log("Running on the port 3000");
// })