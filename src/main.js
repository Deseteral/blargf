require('dotenv').config();

const path = require('path');
const { performance } = require('perf_hooks');
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
app.get('/', (req, res) => {
  const timeStart = performance.now();
  const html = render();
  const renderTime = (performance.now() - timeStart);

  res.send(html);

  signale.info(`Render took ${renderTime} ms`);
});

app.listen(PORT, () => signale.start(`blargf server started on port ${PORT}`));
