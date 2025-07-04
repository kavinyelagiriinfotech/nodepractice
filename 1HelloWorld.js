let http = require('http')
http.createServer(function(req,res){
    res.writeHead(400, {'Content-Type': 'text/html'});
    res.end('Hello World by node file');
}).listen(8080);

console.log(global)