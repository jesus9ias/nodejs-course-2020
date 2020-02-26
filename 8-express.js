var http = require('http');
var express = require('express');

var APP = express();

var SERVER = http.createServer(APP);

var port = 4000;

APP.get('/', function(req, res) {
  res.send('Home page');
});

APP.get('/users', function(req, res) {
  res.send('Users page');
});

APP.post('/save', function(req, res) {
  res.send('Save info');
})

SERVER.listen(port, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Server listen on ', port);
})