import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';

import Header from '../../../code/client/components/header';

const { describe, it } = global;

describe('Header component', () => {
  const wrapper = shallow(<Header />);

  it('renders without exploding', () => {
    expect(wrapper).toExist();
  });

  it('has one logo linking to the "Home" page', () => {
    const expected = 1;
    const actual = wrapper.find('Link[to="/"].header__branding').length;
    expect(actual).toEqual(expected);
  });

  it('has a menu with 4 menu items', () => {
    const expected = 4;
    const actual = wrapper.find('.menu__link').length;
    expect(actual).toEqual(expected);
  });

  it('has one link to the "Users" page', () => {
    const expected = 1;
    const actual = wrapper.find('Link[to="/users"]').length;
    expect(actual).toEqual(expected);
  });

  it('has one link to the "Home" page', () => {
    const expected = 1;
    const actual = wrapper.find('Link[to="/"]').length;
    expect(actual).toEqual(expected);
  });

  it('has one link to "Not found" page', () => {
    const expected = 1;
    const actual = wrapper.find('Link[to="/404"]').length;
    expect(actual).toEqual(expected);
  });
});
