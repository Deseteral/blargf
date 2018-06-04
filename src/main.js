require('dotenv').config();

const path = require('path');
const express = require('express');
const compression = require('compression');
const signale = require('signale');

signale.config({
  displayTimestamp: true,
});

const render = require('./views');

const { PORT } = process.env;
const app = express();

app.use(compression());
app.use('/', express.static(path.join(__dirname, 'static')));
app.get('/', (req, res) => res.send(render()));

app.listen(PORT, () => signale.start(`blargf server started on port ${PORT}`));
