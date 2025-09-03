const http = require('http');
const add = require('./app'); 

http.createServer((req, res) =>{
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(add(201, 887).toString()); 
}).listen(8085);  

console.log('Server running at http://localhost:8085/');
