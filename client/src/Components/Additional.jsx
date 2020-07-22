import React from 'react';
import { additional } from '../style.js';

var Additional = (props) => (
  <div id='additionalTab' style={additional}>
    <p>{props.additional}</p>
  </div>
)

export default Additional;