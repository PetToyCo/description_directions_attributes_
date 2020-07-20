const express = require('express');
const path = require('path');
const db = require('./database-mongodb/index.js');

const app = express();

//crossorigin permission for 3000, 3004, 3005 and 3006
app.use((req, res, next) => {
  //local address
  //const address = '127.0.0.1'

  //deployed address
  const address = '52.14.208.55';

  const { referer } = req.headers;
  if (referer) {
    if (req.headers.referer.includes('3004')) {
      res.header('Access-Control-Allow-Origin', `http://${address}:3004`);
    } else if (req.headers.referer.includes('3005')) {
      res.header('Access-Control-Allow-Origin', `http://${address}:3005`);
    } else if (req.headers.referer.includes('3006')) {
      res.header('Access-Control-Allow-Origin', `http://${address}:3006`);
    } else if (req.headers.referer.includes('3000')) {
      res.header('Access-Control-Allow-Origin', `http://${address}:3000`);
    }
  }
  next();
});

app.use(express.static(path.join(__dirname, 'client/public')));


//get title and brand name for an item
app.get('/itemInformation/:itemId', (req, res) => {
  const itemId = req.params.itemId;
  console.log('itemId: ', itemId);

  db.getTitleAndBrand(itemId)
    .then(data => {
      console.log('success getting title and brand');
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
      console.log('success getting descriptionObj');

      var formattedData = {
        description: {
          title: data[0].title,
          description: data[0].description,
          SKU: data[0].SKU,
          primaryBrand: data[0].primaryBrand,
          daysToShip: data[0].daysToShip
        },
        directions: {
          directions: data[0].directions
        },
        attributes: {
          primaryColor: data[0].primaryColor,
          material: data[0].material,
          length: data[0].length,
          width: data[0].width
        },
        details: {
          additionalDetails: data[0].additionalDetails
        }
      }

      res.send(formattedData);
    })
    .catch(err => {
      res.status(500).send(err);
      console.log('error in getDescriptionObject: ', err);
    })

});

// app.listen(3002, () => {
//   console.log('Express server listening on port 3002');
// });

module.exports = app;