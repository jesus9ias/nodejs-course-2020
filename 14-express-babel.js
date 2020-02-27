import http from 'http';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const APP = express();

const SERVER = http.createServer(APP);

APP.get('/', (req, res) => {
  res.send('end request on get');
});

APP.post(['/', '/users'], (req, res) => {
  console.log(req.headers);
  res.send('end request on post');
});

SERVER.listen(process.env.PORT);

