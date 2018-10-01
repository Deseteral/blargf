/* eslint-disable import/first */
require('dotenv').config();

import path from 'path';
import { performance } from 'perf_hooks';
import express from 'express';
import compression from 'compression';
import signale from 'signale';

signale.config({
  displayTimestamp: true,
});

const render = require('./views');

const { PORT } = process.env;
const app = express();

app.use(compression());
app.use('/', express.static(path.join(__dirname, 'static')));
app.get('/', (req, res) => {
  const timeStart = performance.now();
  const html = render();
  const renderTime = (performance.now() - timeStart);

  res.send(html);

  signale.info(`Render took ${renderTime} ms`);
});

app.listen(PORT, () => signale.start(`blargf server started on port ${PORT}`));
