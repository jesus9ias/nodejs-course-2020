const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const APP = express();

APP.use(bodyParser.urlencoded());
APP.use(bodyParser.json());

const SERVER = http.createServer(APP);

APP.post('/', (req, resp) => {
  console.log(req.body.category);
  resp.send('hola');
});

SERVER.listen(4000);
