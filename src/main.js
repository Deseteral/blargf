const express = require('express');
const app = express();

const PORT = 3456;

app.use('/', express.static(`${__dirname}/static`));
app.listen(PORT, () => {
  console.log(`blargf server started on port ${PORT}`);
});
