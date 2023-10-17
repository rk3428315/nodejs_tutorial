const http = require('http');

// To create server with port 4500
http.createServer((req, res)=>{
    res.write(`<h1>Hello this is response!</h1>`);
    res.end();
}).listen(5000);

// Adavance with express js

// http.get("/home",(req,res)=>{
//     res.send("Home page");
// })