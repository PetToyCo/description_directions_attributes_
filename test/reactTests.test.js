/**
 * @jest-environment jsdom
 */

import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import sinon from 'sinon';
//import nock from 'nock';
//import "babel-polyfill"
import DescriptionService from '../client/src/index.jsx';
import Description from '../client/src/Components/Description.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('DescriptionService', () => {

  var wrapper;

  var fakeData = {
    title: 'Pet Toy',
    description: 'item description',
    SKU: '8902345',
    primaryBrand: 'brand',
    daysToShip: 'ships in two days'
  }


  it('should find the #indexComponent div when DescriptionService is mounted', () => {
    wrapper = shallow(<DescriptionService />,  { disableLifecycleMethods: true });
    expect((wrapper).find('#indexComponent').length).toBe(1);
  });

  it('should find the #buttons div when DescriptionService is mounted', () => {
    wrapper = shallow(<DescriptionService />,  { disableLifecycleMethods: true });
    expect((wrapper).find('#buttons').length).toBe(1);
  });

  it('should not find the #directionsTab div when DescriptionService is mounted', () => {
    wrapper = shallow(<DescriptionService />,  { disableLifecycleMethods: true });
    expect((wrapper).find('#directionsTab').length).toBe(0);
  });

  it('should find the #descriptionTab div when Description is mounted', () => {
    wrapper = shallow(<Description description={fakeData} />,  { disableLifecycleMethods: true });
    expect((wrapper).find('#descriptionTab').length).toBe(1);
    expect((wrapper).find('span').length).toBe(6);
  });
});