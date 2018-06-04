const path = require('path');
const express = require('express');
const compression = require('compression');
const signale = require('signale');

require('dotenv').config();

signale.config({
  displayTimestamp: true,
});

const { PORT } = process.env;
const app = express();

app.use(compression());
app.use('/', express.static(path.join(__dirname, 'static')));
app.use('/tasks', require('./controllers/tasks-controller'));

app.listen(PORT, () => signale.start(`blargf server started on port ${PORT}`));
