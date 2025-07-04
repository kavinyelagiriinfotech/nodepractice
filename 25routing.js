const http = require("node:http");

const server = http.createServer( (req, res) => {
    // res.end(req.url); 
    if(req.url === '/'){
        res.writeHead(200, {"content-type": "text/plain"});
        res.end("Homepage")
    } else if ( req.url === '/about') {
        res.writeHead(200, {"content-type": "text/plain"});
        res.end("Aboutpage")
    } else {
        res.writeHead(404)
        res.end("Error 404: Page not found");
    }
})

server.listen(3000);