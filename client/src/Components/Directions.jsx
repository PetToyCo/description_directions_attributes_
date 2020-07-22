import React from 'react';
import { directions } from '../style.js';

var Directions = (props) => (
  <div id='directionsTab' style={directions}>
    <p>{props.directions}</p>
  </div>
)

export default Directions;