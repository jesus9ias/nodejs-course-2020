const http = require('http');

http.createServer((req, res) => {
  const data = [];
  req.on('data', (chunk) => {
    console.log('chunk', chunk);
    data.push(chunk);
  });
  req.on('end', () => {
    const body = Buffer.concat(data);
    console.log('buffer', body);
    console.log('result', JSON.parse(body.toString()));
    res.end('end request');
  });
}).listen(3000);