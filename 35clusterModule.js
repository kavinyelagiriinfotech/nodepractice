const cluster = require("node:cluster");
const http = require("node:http");

const OS = require("node:os");

console.log(OS.cpus().length);

if(cluster.isMaster) {
    console.log(`Master is running in ${process.pid}`);
    cluster.fork();
    cluster.fork();
} else {
    console.log(`Worker started at ${process.pid}`);
    const server = http.createServer( (req, res) => {
        if (req.url === "/"){
            res.writeHead(200, {"content-type": "text/plain"})
            res.end("Page responding fastly");
        } else if (req.url === "/slowpage") {
            for ( let i=0; i<20000; i++) {}
            res.writeHead(200, {"content-typr": "text/plain"})
            res.end("Page responding slowly")
        }
    })
    
    server.listen(3000, () => console.log("Server running on port 3000"));
}