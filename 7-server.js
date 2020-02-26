
var http = require('http');

http.createServer(function(req, res) {
  if (req.url === '/info') {
    res.end('Site info');
  } else {
    res.end('Ultra light serve');
  }
}).listen(3000);
