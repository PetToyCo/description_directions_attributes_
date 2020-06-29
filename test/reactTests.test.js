/**
 * @jest-environment jsdom
 */

import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import "babel-polyfill"
//import fetch from 'fetch';
//import Promise from 'bluebird';
//import renderer from 'react-test-renderer';
import DescriptionService from '../client/src/index.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('DescriptionService', () => {

  // it('should mount in a full DOM', () => {
  //   expect(mount(<DescriptionService />).find('#indexComponent').length).toBe(1);
  // });

  it('should find the #buttons div when mounted', () => {
    expect(mount(<DescriptionService />).find('#buttons').length).toBe(1);
  });

  // it('should find four buttons inside #button div', () => {
  //   var DOM = shallow(<DescriptionService />);
  //   var buttons = DOM.find('#buttons button');

  //   expect(buttons.length()).toBe(4);
  // })

});















// // beforeAll(() => {
// //   global.fetch = jest.fn();
// // })

// describe('Testing DescriptionService component', () => {

//   const mock = jest.fn();
//   mock.mockReturnValue(42);

//   var wrapper;
//   beforeEach(() => {
//     wrapper =  shallow(<DescriptionService />, { disableLifecycleMethods: true });
//   });

//   afterEach(() => {
//     wrapper.unmount();
//   });

//   var spyDidMount = jest.spyOn(DescriptionService.prototype, "componentDidMount");

//   // fetch.mockImplementation(() => {
//   //   return Promise.resolve({
//   //     status: 200,
//   //     json: () => {
//   //       return Promise.resolve({
//   //         itemId: '200',
//   //         title: 'Dog Toy',
//   //         description: 'Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   //         SKU: '2342048',
//   //         primaryBrand: 'PetCo',
//   //         daysToShip: 'Ships In Two Business Days',
//   //         directions: 'CAUTION: Intended for pet use only. Not a childs toy. Choose toys based on dogs playing habits. Toys should be large enough to not be swallowed. IMPORTANT: No pet toy is indestructible. Small parts present a choking or gastrointestinal blockage risk. Always supervise your pet during play to prevent accidental swallowing of parts. Inspsect toy regularly and replace if any part becomes loose. If toy becomes wet, some color transfer may occur. Spot clean only.',
//   //         primaryColor: 'Multicolor',
//   //         material: 'Plush',
//   //         length: '8 IN',
//   //         width: '2 IN',
//   //         additionalDetails: 'Lorem ipsum dolor sit amet. Consectetur adipiscing elit.'
//   //       });
//   //     }
//   //   });
//   // });

//   const didMount = wrapper.instance().componentDidMount();

//   didMount.then(() => {
//     wrapper.update();
//     expect(buttons).to.have.lengthOf(1);
//     expect(wrapper.find('button#description').text()).to.be.equal('Description');

//     spyDidMount.mockRestore();
//     fetch.mockClear();
//     done();
//   })

//   // var buttons = wrapper.find('div#buttons');

//   it('Should have 1 div with id=buttons', () => {
//     console.log('line 35: ', mock());
//     expect(buttons).to.have.lengthOf(1);
//   })

//   // it('Should have a button with text "Description"', () => {
//   //   expect(wrapper.find('button#description').text()).to.be.equal('Description');
//   // })
// })




// // describe('App', () => {
// //   it('passes all props to Description component', () => {
// //     const app = mount(<App />);

// //   })
// // });