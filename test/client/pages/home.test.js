import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';

import Home from '../../../code/client/pages/home';

const { describe, it } = global;

describe('Home page', () => {
  it('renders without exploding', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toExist();
  });

  it('has a page title', () => {
    const wrapper = shallow(<Home />);
    const expected = 'Home Page';
    const actual = wrapper.find('h1').text();
    expect(actual).toEqual(expected);
  });
});
