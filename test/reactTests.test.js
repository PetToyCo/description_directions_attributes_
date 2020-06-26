/**
 * @jest-environment jsdom
 */

import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

import DescriptionService from '../client/src/index.jsx';

describe('Testing DescriptionService component', () => {
  var wrapper;
  beforeEach(() => {
    wrapper = shallow(<DescriptionService />);
  });

  it('Should have 1 div with id=buttons', () => {
    expect(wrapper.find('div#buttons')).to.have.lengthOf(1);
  })

  it('Should have a button with text "Description"', () => {
    expect(wrapper.find('button#description').text()).to.be.equal('Description');
  })
})




// describe('App', () => {
//   it('passes all props to Description component', () => {
//     const app = mount(<App />);

//   })
// });