const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/description_directions_attributes');

db = mongoose.connection;

db.on('error', () => {
  console.log('error connecting to db');
})

db.once('open', () => {
  console.log('connected to db');
})

const descriptionSchema = new mongoose.Schema({
  itemId: String,
  title: {
    type: String,
    required: true
  },
  description: String,
  SKU: String,
  primaryBrand: String,
  daysToShip: String,
  directions: String,
  primaryColor: String,
  material: String,
  length: String,
  width: String,
  additionalDetails: String
});

const Description = mongoose.model('Description', descriptionSchema);

module.exports.Description = Description;
module.exports.db = db;