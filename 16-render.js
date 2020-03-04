import http from 'http';
import path from 'path';
import express from 'express';
import getImages from './getImages';

const APP = express();

APP.set('views', './views');
APP.set('view engine', 'pug');

APP.use(express.static('public'));

const SERVER = http.createServer(APP);

APP.get('/', (req, res) => {
  const data = { title: 'Home' };
  res.render('index', data);
});

APP.get('/images', (req, res) => {
  const images = getImages();
  res.render('images', { images, title: 'Image Gallery' });
});

APP.get('/download/:image', (req, res) => {
  const file = path.join(__dirname + '/public/images/' + req.params.image);
  res.download(file);
});

SERVER.listen(5000);

//  npm install --save pug