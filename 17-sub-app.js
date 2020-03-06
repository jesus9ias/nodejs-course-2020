import http from 'http';
import express from 'express';
import productsList from './online_store/products';
import productsRoutes from './online_store/productsRoutes';

const APP = express();
const PRODUCTS = express();

let total = 0;

APP.use('/products', PRODUCTS)

const SERVER = http.createServer(APP);

APP.get('/', (req, res) => {
  res.send('API HOME');
});

productsRoutes(PRODUCTS, productsList, total);

SERVER.listen(5000);