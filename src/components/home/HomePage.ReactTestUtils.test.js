import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {mount, shallow} from 'enzyme';
import HomePage from './HomePage';

function setup() {

  /*let renderer = TestUtils.createRenderer();
  renderer.render(<HomePage/>);
  let output = renderer.getRenderOutput();

  return {
    output,
    renderer
  };*/
  return shallow(<HomePage/>);
}

describe('HomePage via React Test Utils', () => {
  it('has links to buy and sell', () => {
    const wrapper = setup();
    //const { output } = setup();
    expect(wrapper.find('/buy'));
    expect(wrapper.find('/sell'));
  });

  it('exists a home button that takes you to Buy a Car Page', () => {
    const wrapper = setup();
    const link = wrapper.find('Link').find({to: '/buy'}).find('div');
    expect(link.html()).toBe('<div class="home_button">BUY A CAR</div>');
    //const submitButton = output.props.children[5];
    //expect(submitButton.props.value).toBe('Save');
  });

  it('exists a home button that takes you to Sell a Car Page', () => {
    const wrapper = setup();
    const link = wrapper.find('Link').find({to: '/sell'}).find('div');
    expect(link.html()).toBe('<div class="home_button" id="home_button_first">SELL YOUR CAR</div>');
  });
});
