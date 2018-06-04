const express = require('express');
const app = express();
const getTasks = require('./tasks');

const PORT = 3456;

app.use('/', express.static(`${__dirname}/static`));
app.get('/tasks', (req, res) => res.send(JSON.stringify(getTasks())));

app.listen(PORT, () => {
  console.log(`blargf server started on port ${PORT}`);
});
