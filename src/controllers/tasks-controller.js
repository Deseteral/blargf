const express = require('express');
const getTasks = require('../data/tasks');

const router = express.Router();

router.get('/', (req, res) => {
  const tasks = getTasks();
  res.send(JSON.stringify(tasks));
});

module.exports = router;
