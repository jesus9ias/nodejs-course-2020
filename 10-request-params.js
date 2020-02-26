const http = require('http');
const express = require('express');

const APP = express();

const SERVER = http.createServer(APP);

const users = [];

APP.get('/', (req, resp) => {
  console.log(req.query);
  resp.send('hola');
})

APP.get('/users/:id', (req, res) => {
  const id = req.params.id;
  users.push(id);
  console.log(users);
  res.send(`Search user ${id}`);
});

SERVER.listen(4000);
