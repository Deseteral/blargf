/* eslint-disable import/first */
import signale from 'signale';

signale.config({ displayTimestamp: true });

import path from 'path';
import express from 'express';
import compression from 'compression';
import config from './config';
import indexController from './controllers/index';
import dataController from './controllers/data';
import pudeukoController from './controllers/pudeuko';

const app = express();

app.use(compression());
app.use('/', express.static(path.join(__dirname, '..', 'dist', 'static')));
app.use('/', indexController);
app.use('/data', dataController);
app.use('/pudeuko', pudeukoController);

app.listen(config().server.port, () => signale.start(`blargf server started on port ${config().server.port}`));
