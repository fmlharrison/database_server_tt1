var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200);
  res.end('Tech Test 1 - Database Server');
});

server.listen(4000);
console.log('Server Running on Port 4000');
