const http = require('http');
const express = require('express');
const routes = require('./routes');

const APP = express();

const SERVER = http.createServer(APP);

const users = [];

routes(APP, users);

SERVER.listen(4000);
