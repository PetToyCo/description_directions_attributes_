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


describe('Description Model and Associated Helper Functions Test', () => {

  beforeAll(async () => {
    console.log('beforeAll');
    await mongoose.connect('mongodb://localhost/description_directions_attributes', { useNewUrlParser: true, useCreateIndex: true }, (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  });

  afterAll(async (done) => {
    console.log('afterAll');
    await mongoose.connection.close((err) => {
      if (err) {
        console.log('error closing mongoose connection: ', err);
      } else {
        done();
      }
    });
  })


  it('creates and saves an item description', async (done) => {
    const itemDescription = new db.Description(fakeData);
    const savedItem = await itemDescription.save();

    expect(savedItem._id).toBeDefined();
    expect(savedItem.title).toBe(fakeData.title);
    expect(savedItem.additionalDetails).toBe(fakeData.additionalDetails);
    done();
  });


  it('should not save an item description if a required field is empty', async (done) => {
    const badItemDescription = new db.Description(badFakeData);
    let err;

    try {
      const badSavedItem = await badItemDescription.save();
      error = badSavedItem;
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    done();
  })

 
  it('should find hardcoded entries from seed.js in database', async (done) => {
    const item100 = await db.Description.find({itemId: 100});
    const item109 = await db.Description.find({itemId: 109});

    expect(item100[0].title).toBe('CatToys Spring-Loaded Mouse');
    expect(item109[0].title).toBe('BestFriends Rubber Bone with Chicken Flavor');
    done();
  })

  
  it('should return a doc with only title and primaryBrand fields when getTitleAndBrand is called', async (done) => {
      const titleAndBrandDoc = await db.getTitleAndBrand(200);
      const keys = Object.getOwnPropertyNames(titleAndBrandDoc[0]);
      const length = keys.length;

      expect(titleAndBrandDoc[0]._id).toBeFalsy();
      expect(length).toBe(2);
      expect(titleAndBrandDoc[0].title).toBeDefined();
      expect(titleAndBrandDoc[0].primaryBrand).toBeDefined();
      done();
  })


  it('should return a doc with all of the descriptionObject fields when getDescriptionObject is called', async (done) => {
    const descriptionObjectDoc = await db.getDescriptionObject(200);
    const keys = Object.getOwnPropertyNames(descriptionObjectDoc[0]);
    const length = keys.length;

    expect(length).toBe(12);
    expect(descriptionObjectDoc[0]._id).toBeFalsy();
    expect(descriptionObjectDoc[0].title).toBe(fakeData.title);
    expect(descriptionObjectDoc[0].primaryColor).toBe(fakeData.primaryColor);
    done();
  })

})


