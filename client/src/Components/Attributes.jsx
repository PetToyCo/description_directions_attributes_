import React from 'react';
import { spanKey, spanVal, liGrey, ul } from '../style.js';

var Attributes = (props) => (
  <div id='attributesTab'>
    <ul style={ul} className='table2'>
      <li style={liGrey} className='tableLine'>
      <span style={spanKey} className='key'>Additional Features</span>
      <span style={spanVal} className='val'></span>
      </li>
      <li className='tableLine gray'>
      <span style={spanKey} className='key'>Primary Color</span>
      <span style={spanVal} className='val'>{props.attributes.primaryColor}</span>
      </li>
      <li style={liGrey} className='tableLine'>
      <span style={spanKey} className='key'>Material</span>
      <span style={spanVal} className='val'>{props.attributes.material}</span>
      </li>
    </ul>
    <ul style={ul} className='table2'>
      <li style={liGrey} className='tableLine'>
      <span style={spanKey} className='key'>Item Dimensions</span>
      <span style={spanVal} className='val'></span>
      </li>
      <li className='tableLine gray'>
      <span style={spanKey} className='key'>Length</span>
      <span style={spanVal} className='val'>{props.attributes.length}</span>
      </li>
      <li style={liGrey} className='tableLine'>
      <span style={spanKey} className='key'>Width</span>
      <span style={spanVal} className='val'>{props.attributes.width}</span>
      </li>
    </ul>
  </div>
)

export default Attributes;