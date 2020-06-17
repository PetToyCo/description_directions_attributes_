const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.listen(3002, () => {
  console.log('Express server listening on port 3002');
});