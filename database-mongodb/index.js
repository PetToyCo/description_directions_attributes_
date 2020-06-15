const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/description_directions_attributes');

const descriptionSchema = new mongoose.Schema({
  itemId: STRING,
  title: STRING,
  description: STRING,
  SKU: INTEGER,
  primaryBrand: STRING,
  daysToShip: STRING,
  directions: STRING,
  primaryColor: STRING,
  material: STRING,
  length: STRING,
  width: STRING,
  additionalDetails: STRING
});

const Description = mongoose.model('Description', descriptionSchema);

module.exports = Description;