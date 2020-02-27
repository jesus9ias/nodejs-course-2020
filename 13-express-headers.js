const http = require('http');
const express = require('express');

const APP = express();

const SERVER = http.createServer(APP);

APP.get('/', (req, res) => {
  console.log(req.headers);
  res.send('end request');
});

APP.post(['/', '/users'], (req, res) => {
  console.log(req.headers);
  res.send('end request on post');
});

SERVER.listen(4000);

