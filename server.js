const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./database-mongodb/index.js');

const app = express();

app.use(express.static(path.join(__dirname, 'client/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//get title and brand name for an item
app.get('/itemInformation/:itemId', (req, res) => {
  const itemId = req.params.itemId;
  console.log('itemId: ', itemId);

  db.getTitleAndBrand(itemId)
    .then(data => {
      console.log('success getting title and brand: ', data);
      res.send(data[0]);
    })
    .catch(err => {
      res.status(500).send(err);
      console.log('error in getTitleAndBrand: ', err);
    })
});

//get full description object for an item
app.get('/descriptionObject/:itemId', (req, res) => {
  const itemId = req.params.itemId;
  console.log('itemId: ', itemId);

  db.getDescriptionObject(itemId)
  .then(data => {
    console.log('success getting descriptionObj: ', data);
    res.send(data[0]);
  })
  .catch(err => {
    res.status(500).send(err);
    console.log('error in getDescriptionObject: ', err);
  })

});

app.listen(3002, () => {
  console.log('Express server listening on port 3002');
});