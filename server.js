const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./database-mongodb/index.js');

const app = express();

app.use(express.static(path.join(__dirname, 'client/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//itemInformation/:itemId
app.get('/itemInformation/:itemId', (req, res) => {
  const itemId = req.params;

  db.getItemInfo(itemId)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
      console.log('error in getItemInfo: ', err);
    })
});

//descriptionObject/:itemId
app.get('/descriptionObject/:itemId', (req, res) => {
  const itemId = req.params;

});

app.listen(3002, () => {
  console.log('Express server listening on port 3002');
});