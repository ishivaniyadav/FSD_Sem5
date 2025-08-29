const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World! ');
}).listen(8085);

console.log('Server running at http://localhost:8085/');


