import React from 'react';
//import { para, bullets, spanKey, spanVal, liGrey, ul, left } from '../style.js';

var Description = (props) => (
  <div id='descriptionTab'>
    <span id='left' >
      <p>{props.description.title}</p>
      <ul >
        {props.description.description.map(line => {
          return <li>{line}</li>
        })}
      </ul>
    </span>
    <span>
      <ul className='table' >
        <li className='tableLine' >
          <span className='key' >SKU</span>
          <span className='val' >{props.description.SKU}</span>
        </li>
        <li className='tableLine gray'>
          <span className='key' >Primary Brand</span>
          <span className='val' >{props.description.primaryBrand}</span>
        </li>
        <li className='tableLine' >
          <span className='key' >Days to Ship</span>
          <span className='val' >{props.description.daysToShip}</span>
        </li>
      </ul>
    </span>
  </div>
)

export default Description;