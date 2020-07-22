import React from 'react';
import { para, bullets, spanKey, spanVal, liGrey, ul, left } from '../style.js';

var Description = (props) => (
  <div id='descriptionTab'>
    <span id='left' style={left}>
    <p style={para}>{props.description.title}</p>
    <ul style={bullets}>
      <li>{props.description.description}</li>
    </ul>
    </span>
    <span>
    <ul className='table' style={ul}>
      <li className='tableLine' style={liGrey}>
        <span className='key' style={spanKey}>SKU</span>
        <span className='val' style={spanVal}>{props.description.SKU}</span>
      </li>
      <li className='tableLine gray'>
        <span className='key' style={spanKey}>Primary Brand</span>
        <span className='val' style={spanVal}>{props.description.primaryBrand}</span>
      </li>
      <li className='tableLine' style={liGrey}>
        <span className='key' style={spanKey}>Days to Ship</span>
        <span className='val' style={spanVal}>{props.description.daysToShip}</span>
      </li>
    </ul>
    </span>
  </div>
)

export default Description;