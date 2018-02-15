const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');

const controllers = require('./controllers/index');

const app = express();

app.use(express.static(path.resolve(__dirname, '../../', 'dist')));

// middlewares
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', controllers);

app.listen(process.env.PORT || 8080, () => {
  console.log('Magic shiz on 8080');
});
