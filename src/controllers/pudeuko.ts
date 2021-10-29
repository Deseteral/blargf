import express from 'express';
import { deletePudeukoItem } from '../pudeuko/pudeuko';

const pudeukoController = express.Router();

pudeukoController.delete('/:itemId', (req, res) => {
  deletePudeukoItem(req.params.itemId);
  res.status(200).send();
});

export default pudeukoController;
