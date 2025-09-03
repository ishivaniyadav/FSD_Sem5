const http = require('http');
const url = require('url');
const fs = require('fs');
const querystring = require('querystring');
const getWeatherAdvice = require('./weather');  

http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <html>
        <head><title>Weather Advice</title></head>
        <body>
          <h1>Enter Weather Details</h1>
          <form method="POST" action="/advice">
            <label>Temperature (°C):</label>
            <input type="number" name="temp" required><br><br>
            <label>Condition (e.g., sunny, rainy, cold):</label>
            <input type="text" name="condition" required><br><br>
            <button type="submit">Get Advice</button>
          </form>
        </body>
      </html>
    `);
  } else if (req.method === 'POST' && req.url === '/advice') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const parsedData = querystring.parse(body);
      const temp = parseInt(parsedData.temp);
      const condition = parsedData.condition;

      const advice = getWeatherAdvice(temp, condition);

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`
        <html>
          <head><title>Advice Result</title></head>
          <body>
            <h1>Weather Advice</h1>
            <p><strong>Temperature:</strong> ${temp}°C</p>
            <p><strong>Condition:</strong> ${condition}</p>
            <p><strong>Advice:</strong> ${advice}</p>
            <br>
            <a href="/">Check Again</a>
          </body>
        </html>
      `);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
}).listen(8085);

console.log('Server running at http://localhost:8085/');

