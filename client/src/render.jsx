import DescriptionService from './index.jsx';
import ReactDOM from 'react-dom';
import React from 'react';
//for client-side rendering:
//ReactDOM.render(<DescriptionService />, document.getElementById('description'));

//for server-side rendering:
ReactDOM.hydrate(<DescriptionService />, document.getElementById('description'));