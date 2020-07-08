import React from 'react';
import { additional } from '../style.js';

var Additional = (props) => (
  <div id='additionalTab'>
    <p style={additional}>{props.additional}</p>
  </div>
)

export default Additional;