/* eslint-disable import/first */
require('dotenv').config();

import path from 'path';
import express from 'express';
import compression from 'compression';
import signale from 'signale';
import indexController from './controllers/index';

signale.config({
  displayTimestamp: true,
});

const { PORT } = process.env;
const app = express();

app.use(compression());
app.use('/', express.static(path.join(__dirname, 'static')));
app.get('/', indexController);

app.listen(PORT, () => signale.start(`blargf server started on port ${PORT}`));
