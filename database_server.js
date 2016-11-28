var express = require('express');
var app = express();
var url = require('url');
var exports = module.exports = {};

app.get('/', function(req, res) {
  res.send('Database Server');
});

app.get('/set', function(req, res) {
  var parsedUrl = url.parse(req.url, true).query;
  for (key in parsedUrl) {
    exports[key] = parsedUrl[key];
  }
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Your data has been stored");
});

app.get('/get', function(req, res) {
  var reqKey = url.parse(req.url, true).query;
  var response = {};
  for(key in reqKey) {
    if (exports[reqKey[key]]) {
      response[reqKey[key]] = exports[reqKey[key]];
    } else {
      response[reqKey[key]] = "Data could not be found.";
    }
  }
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(response[reqKey[key]]);
});

var server = app.listen(4000);

exports.closeServer = function() {
  server.close();
}; 
