import React from 'react';

var Description = (props) => (
  <div id='descriptionTab'>
    <p>{props.description.title}</p>
    <ul>
      <li>{props.description.description}</li>
    </ul>
    <ul className='table'>
      <li className='tableLine'>
        <span className='key'>SKU</span>
        <span className='val'>{props.description.SKU}</span>
      </li>
      <li className='tableLine gray'>
        <span className='key'>Primary Brand</span>
        <span className='val'>{props.description.primaryBrand}</span>
      </li>
      <li className='tableLine'>
        <span className='key'>Days to Ship</span>
        <span className='val'>{props.description.daysToShip}</span>
      </li>
    </ul>
  </div>
)

export default Description;