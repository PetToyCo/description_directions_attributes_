/* eslint-env mocha */
const mongoose = require('mongoose');
const db = require('../database-mongodb/index');

const fakeData = {
  itemId: '200',
  title: 'Dog Toy',
  description: 'Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  SKU: '2342048',
  primaryBrand: 'PetCo',
  daysToShip: 'Ships In Two Business Days',
  directions: 'CAUTION: Intended for pet use only. Not a childs toy. Choose toys based on dogs playing habits. Toys should be large enough to not be swallowed. IMPORTANT: No pet toy is indestructible. Small parts present a choking or gastrointestinal blockage risk. Always supervise your pet during play to prevent accidental swallowing of parts. Inspsect toy regularly and replace if any part becomes loose. If toy becomes wet, some color transfer may occur. Spot clean only.',
  primaryColor: 'Multicolor',
  material: 'Plush',
  length: '8 IN',
  width: '2 IN',
  additionalDetails: 'Lorem ipsum dolor sit amet. Consectetur adipiscing elit.'
};

const badFakeData = {
  itemId: '200',
  description: 'Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  SKU: '2342048',
  primaryBrand: 'PetCo',
  daysToShip: 'Ships In Two Business Days',
  directions: 'CAUTION: Intended for pet use only. Not a childs toy. Choose toys based on dogs playing habits. Toys should be large enough to not be swallowed. IMPORTANT: No pet toy is indestructible. Small parts present a choking or gastrointestinal blockage risk. Always supervise your pet during play to prevent accidental swallowing of parts. Inspsect toy regularly and replace if any part becomes loose. If toy becomes wet, some color transfer may occur. Spot clean only.',
  primaryColor: 'Multicolor',
  material: 'Plush',
  length: '8 IN',
  width: '2 IN',
  additionalDetails: 'Lorem ipsum dolor sit amet. Consectetur adipiscing elit.'
};


describe('Description Model Test', () => {

  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/description_directions_attributes', { useNewUrlParser: true, useCreateIndex: true }, (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  });


  it('creates and saves an item description', async () => {
    const itemDescription = new db.Description(fakeData);
    const savedItem = await itemDescription.save();

    expect(savedItem._id).toBeDefined();
    expect(savedItem.title).toBe(fakeData.title);
    expect(savedItem.additionalDetails).toBe(fakeData.additionalDetails);
  });


  it('should not save an item description if a required field is empty', async () => {
    const badItemDescription = new db.Description(badFakeData);
    let err;

    try {
      const badSavedItem = await badItemDescription.save();
      error = badSavedItem;
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
  })

})
