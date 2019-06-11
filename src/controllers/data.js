import express from 'express';
import getData from '../services/data-service';

const dataController = express.Router();

dataController.get('/', (req, res) => {
  const data = getData();
  res.send(data);
});

export default dataController;
