import path from 'path';
import express from 'express';
import compression from 'compression';
import signale from 'signale';
import config from './application/config';
import indexController from './controllers/index';

signale.config({
  displayTimestamp: true,
});

const app = express();

app.use(compression());
app.use('/', express.static(path.join(__dirname, 'static')));
app.get('/', indexController);

app.listen(config.server.port, () => signale.start(`blargf server started on port ${config.server.port}`));
