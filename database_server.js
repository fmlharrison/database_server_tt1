var express = require('express');
var app = express();
var url = require('url');
var exports = module.exports = {};

var data = {};

app.get('/', function(req, res) {
  res.send('Database Server');
});

app.get('/set', function(req, res) {
  var parsedUrl = url.parse(req.url, true).query;

  for (key in parsedUrl) {
    data[key] = parsedUrl[key];
  }

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Your data has been stored");
});

app.get('/get', function(req, res) {
  var reqKey = url.parse(req.url, true).query;
  var response = {};

  for(key in reqKey) {
    response[reqKey[key]] = data[reqKey[key]];
  }

  var json = response[reqKey[key]];
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(json);
});

var server = app.listen(4000, function() {
  var port = server.address().port;
  console.log('Server Running on Port %s', port);
});

exports.closeServer = function() {
  server.close();
};
