import http from 'http';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const APP = express();

const SERVER = http.createServer(APP);

APP.get('/', (req, res) => {
  const total = 10;
  let result = '<ul>';
  for (let i = 1; i <= total; i++) {
    result += '<li>' + i + '</li>'
  }
  result += '</ul>';

  res.send(result);
});

APP.post(['/', '/users'], (req, res) => {
  console.log(req.headers);
  res.send('end request on post');
});

SERVER.listen(7000);

