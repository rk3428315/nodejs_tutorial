const http = require('http');

// To create server with port 4500
http.createServer((req, res)=>{
    res.write(`<h1>Hello this is response!</h1>`);
    res.end();
}).listen(4500);
 