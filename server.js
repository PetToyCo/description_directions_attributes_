const express = require('express');
const path = require('path');
const db = require('./database-mongodb/index.js');
const fs = require('fs');

const app = express();
const router = express.Router();

//added for server-side rendering
const React = require('react');
const ReactDOMServer = require('react-dom/server');
console.log('before');
//const DescriptionService = require('./client/src/index.jsx');
import DescriptionService from './client/src/index.jsx';
console.log('after');

const reactApp = ReactDOMServer.renderToString(React.createElement(DescriptionService)); //jsx should be js
//const element = React.createElement(DescriptionService);
const indexFile = path.resolve('./client/public/index.html');


const serverRenderer = (req, res, next) => {
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.log('readFile err: ', err);
      return res.status(500).send(err);
    } else {
      return res.send(data.replace(`<div id='description'></div>", "<div id='description">${reactApp}</div>`))
    }
  })
};

router.use(serverRenderer);
router.use(express.static(path.join(__dirname, 'dist'))); //client/public
app.use(router);



//crossorigin permission
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
  next();
})

// app.use(express.static(path.join(__dirname, 'client/public')));


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

app.listen(3002, () => {
  console.log('Express server listening on port 3002');
});

export default app;