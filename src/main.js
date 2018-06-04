require('dotenv').config();
const express = require('express');
const compression = require('compression');
const app = express();
const getTasks = require('./tasks');

const { PORT } = process.env;

app.use(compression());
app.use('/', express.static(`${__dirname}/static`));
app.get('/tasks', async (req, res) => {
  const tasks = await getTasks();
  res.send(JSON.stringify(tasks))
});

app.listen(PORT, () => {
  console.log(`blargf server started on port ${PORT}`);
});
