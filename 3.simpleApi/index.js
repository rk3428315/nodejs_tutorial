// Server to run on the port
const http = require('http');
const data = require('./data')

// const data = {'Name': 'Ravi'}
http.createServer((req, res)=>{
    res.writeHead(200, {'content-type':'application\json'});
    res.write('server is runnig.'),
    res.write(JSON.stringify({data}));
    res.end();
}).listen(3000);

