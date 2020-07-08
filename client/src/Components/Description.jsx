import React from 'react';
import { spanKey, spanVal, liGrey, ul, left, leftUl, p, divStyle } from '../style.js';

var Description = (props) => (
  <div style={divStyle} id='descriptionTab'>
    <div style={left}>
      <p style={p}>{props.description.title}</p>
      <ul style={leftUl}>
        <li>{props.description.description}</li>
      </ul>
    </div>
    <ul style={ul} className='table'>
      <li style={liGrey} className='tableLine'>
        <span style={spanKey} className='key'>SKU</span>
        <span style={spanVal} className='val'>{props.description.SKU}</span>
      </li>
      <li className='tableLine gray'>
        <span style={spanKey} className='key'>Primary Brand</span>
        <span style={spanVal} className='val'>{props.description.primaryBrand}</span>
      </li>
      <li style={liGrey} className='tableLine'>
        <span style={spanKey} className='key'>Days to Ship</span>
        <span style={spanVal} className='val'>{props.description.daysToShip}</span>
      </li>
    </ul>
  </div>
)

export default Description;