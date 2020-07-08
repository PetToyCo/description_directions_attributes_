import React from 'react';
import { directions } from '../style.js';

var Directions = (props) => (
  <div id='directionsTab'>
    <p style={directions}>{props.directions}</p>
  </div>
)

export default Directions;