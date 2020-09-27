const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/node-jwt-auth', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(4000, () => console.log("Running on port"))
}).catch(err => console.error(err));

app.get('/', (request, response) => response.render('home'));
app.get('/reverse-shells', (request, response) => response.render('reverse-shells'));
