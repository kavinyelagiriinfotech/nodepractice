const http = require("node:http");

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