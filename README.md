# Description_Directions_Attributes/Specifications_Details

This service builds a tabbed module that presents more detailed item information.

## Related Projects
- https://github.com/PetToyCo/reviews
- https://github.com/PetToyCo/photo-gallery

## Table of Contents
  1. Usage
  2. Requirements
  3. Development

## Usage
1. From the root directory:
npm install

2. If the database has not yet been seeded:
From within the root directory:
npm run seed

Once the database has been seeded:
3. From within the root directory:
npm start

4. Navigate to localhost:3002 in the browser

5. This service has two endpoints. One to retrieve an item's descriptionObject, and one to retrieve its title and primaryBrand. To retrieve data for a specific item (100-199), navigate to:

localhost:3002/descriptionObject/### 

JSON response format:
{
  description: {
    title: “item title”,
    description: “item description”,
    SKU: “number representing the item’s SKU”,
    primaryBrand: “the item’s brand name”,
    daysToShip: “a string representing the item’s days to ship”
   },
  directions: {
    directions: “a string containing directions and warnings about the item”
  },
  attributes: {
    primaryColor: “item’s primary color”,
    material: “item’s primary material”,
    length: “item’s length in inches as a string”,
    width: “item’s width in inches as a string”
  },
  details: {
    additionalDetails: “item’s advertising copy”
  }
 }



localhost:3002/itemInformation/###

JSON response format:
{
  title: “full name of item”,
  primaryBrand: “brand name”
}


## Requirements
Node 10.15.3

## Development
### Installing Dependencies
From within the root directory:
npm install

### Running Tests
This service uses Jest for unit testing of the mongoose database schema, and Jest with Enzyme for unit testing of the front-end react components.

From within the root directory:
npm run test (to run all tests)
npm run testFront (to run only the front-end enzyme tests)
npm run testBack (to run only the back-end jest tests)