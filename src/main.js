/* eslint-disable import/first */
import signale from 'signale';

signale.config({
  displayTimestamp: true,
});

import path from 'path';
import express from 'express';
import compression from 'compression';
import config from './application/config';
import indexController from './controllers/index';
import dataController from './controllers/data';

const app = express();

app.use(compression());
app.use('/', express.static(path.join(__dirname, 'static')));
app.get('/', indexController);
app.get('/data', dataController);

app.listen(config().server.port, () => signale.start(`blargf server started on port ${config().server.port}`));
