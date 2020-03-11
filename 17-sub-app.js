import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import bearerToken from 'express-bearer-token';
import productsList from './online_store/products';
import productsRoutes from './online_store/productsRoutes';
import setDate from './middlewares/setDate';
import logger from './middlewares/logger';
import authorize from './middlewares/authorize';
import { matchHash, createToken } from './hasher';

dotenv.config();

const APP = express();
const PRODUCTS = express();

let total = 0;

APP.use(bodyParser.json());

APP.use('/products', PRODUCTS);

PRODUCTS.use(bearerToken());
PRODUCTS.use(setDate);
PRODUCTS.use(logger);
PRODUCTS.use(authorize);

const SERVER = http.createServer(APP);

APP.get('/', (req, res) => {
  res.send('API HOME');
});

APP.post('/login', (req, res) => {
  const { user, password } = req.body;
  console.log(user, password);
  if (user === process.env.USER && matchHash(password, process.env.PASSWORD)) {
    const newToken = createToken({ user });
    res.json({ status: 'ok', result: newToken });
  } else {
    res.sendStatus(401);
  }
});

productsRoutes(PRODUCTS, productsList, total);

SERVER.listen(5000);