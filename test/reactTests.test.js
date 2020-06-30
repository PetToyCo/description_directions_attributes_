/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import sinon from 'sinon';
//import nock from 'nock';
//import waitUntil from 'async-wait-until';
//import "babel-polyfill"
//import fetch from 'fetch';
//import Promise from 'bluebird';
//import renderer from 'react-test-renderer';
import DescriptionService from '../client/src/index.jsx';
import Description from '../client/src/Components/Description.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('DescriptionService', () => {

  var wrapper;

  // afterEach(() => {
  //   wrapper.unmount();
  // });

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
    console.log(wrapper.find('span').length);
    expect((wrapper).find('#descriptionTab').length).toBe(1);
    expect((wrapper).find('span').length).toBe(6);
  });

  //add other tests to check that data is filtering thru

});

// describe('DescriptionService Components', () => {

//   it('updates state after axios call', () => {
//     const server = sinon.fakeServer.create();
//     server.respondWith('GET', '/descriptionObject/100', [{
//       description: {
//         title: 'Cat Toy',
//         description: 'item description',
//         SKU: '1234567',
//         primaryBrand: 'brandName',
//         daysToShip: 'two days'
//       },
//       directions: {
//         directions: 'a string containing directions and warnings about the item'
//       },
//       attributes: {
//         primaryColor: 'purple',
//         material: 'plush',
//         length: '4 IN',
//         width: '5 IN'
//       },
//       details: {
//         additionalDetails: 'item’s advertising copy'
//       }
//     }]
//     );

//     var wrapper = mount(<DescriptionService />);
//     server.respond();
//     server.restore();
//     expect(wrapper.update().state().current).to.be('description');
//   })





  // beforeAll(() => {
  //   nock()
  //     .get('/descriptionObject/100')
  //     .reply(200, {
  //       description: {
  //         title: 'Cat Toy',
  //         description: 'item description',
  //         SKU: '1234567',
  //         primaryBrand: 'brandName',
  //         daysToShip: 'two days'
  //       },
  //       directions: {
  //         directions: 'a string containing directions and warnings about the item'
  //       },
  //       attributes: {
  //         primaryColor: 'purple',
  //         material: 'plush',
  //         length: '4 IN',
  //         width: '5 IN'
  //       },
  //       details: {
  //         additionalDetails: 'item’s advertising copy'
  //       }
  //     });
  // });

  // it('should pass data down to components after component mounts', async (done) => {
  //   var component = shallow(<DescriptionService />);

  //   await waitUntil(() => component.state('current') !== '');

  //   expect(component.state('current')).toEqual('description');

  //   done();
  // })

  // it('should find four buttons inside #button div', () => {
  //   var DOM = shallow(<DescriptionService />);
  //   var buttons = DOM.find('#buttons button');

  //   expect(buttons.length()).toBe(4);
  // });

  // it('calls componentDidMount', () => {
  //   jest.spyOn(DescriptionService.prototype, 'componentDidMount');
  //   var wrapper = shallow(<DescriptionService />);

  //   expect(DescriptionService.prototype.componentDidMount.mock.calls.length).toBe(1);
  // });
// })















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