import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import connection from './connection';

const APP = express();

APP.use(bodyParser.json());

const SERVER = http.createServer(APP);

APP.get('/', (req, res) => {
  const status = req.query.status;
  const query = status
    ? `select * from products where status = ${status}`
    : 'select * from products';
  connection.query(query, (err, result) => {
    console.log(result);
    if (err) {
      res.json({ status: 'error', msg: err.message })
    } else {
      res.json({ status: 'ok', result });
    }
  });
});

APP.get('/products/:id', (req, res) => {
  connection.query('select id, name, value from products where id = ?', [req.params.id], (err, result) => {
    if (err) {
      res.json({ status: 'error', msg: err.message })
    } else {
      res.json({ status: 'ok', result });
    }
  })
});

APP.delete('/products/:id', (req, res) => {
  connection.query('delete from products where id = ?', [req.params.id], (err, result) => {
    if (err) {
      res.json({ status: 'error', msg: err.message })
    } else {
      res.json({ status: 'ok', result });
    }
  })
});

APP.post('/products', (req, res)=> {
  const {
    name,
    value,
    stock,
    status
  } = req.body;
  connection.query('insert into products (name, value, stock, status) values (?, ?, ?, ?)', [name, value, stock, status], (err, result) => {
    if (err) {
      res.json({ status: 'error', msg: err.message })
    } else {
      res.json({ status: 'ok', result: result.insertId });
    }
  });
});

APP.put('/products/:id', (req, res) => {
  const {
    name,
    value,
    stock,
    status
  } = req.body;
  connection.query('update products set name = ?, value = ?, stock = ?, status = ? where id = ?', [name, value, stock, status, req.params.id], (err, result) => {
    if (err) {
      res.json({ status: 'error', msg: err.message })
    } else {
      res.json({ status: 'ok', result });
    }
  });
});

SERVER.listen(4000);