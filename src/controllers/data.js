import getData from '../services/data-service';

function dataController(req, res) {
  const data = getData();
  res.send(data);
}

export default dataController;
