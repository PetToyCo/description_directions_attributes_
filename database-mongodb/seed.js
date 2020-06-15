const Description = require('./index.js');


const itemData = [
  {
    itemId: '100',
    title: 'CatToys Spring-Loaded Mouse',
    description: 'Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    SKU: '3419054',
    primaryBrand: 'CatToys',
    daysToShip: 'Ships Next Business Day',
    directions: 'CAUTION: Intended for pet use only. Not a childs toy.Choose toys based on cats playing habits. Toys should be large enough to not be swallowed. IMPORTANT: No pet toy is indestructible. Small parts present a choking or gastrointestinal blockage risk. Always supervise your pet during play to prevent accidental swallowing of parts. Inspsect toy regularly and replace if any part becomes loose. If toy becomes wet, some color transfer may occur. Spot clean only.',
    primaryColor: 'Brown',
    material: 'Plush',
    length: '5 IN',
    width: '2.5 IN',
    additionalDetails: 'Lorem ipsum dolor sit amet. Consectetur adipiscing elit.'
  },
];

const insertItemData = () => {
  Description.create(itemData)
  .then(() => {
    console.log('DB seeded');
  })
}

insertItemData();