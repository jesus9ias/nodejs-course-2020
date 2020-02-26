const url = require('url');
const http = require('http');

http.createServer((req, res) => {
  console.log(req.url, req.method);

  const params = url.parse(req.url, true);

  console.log(params);

  res.end(JSON.stringify(params));
}).listen(5000);
