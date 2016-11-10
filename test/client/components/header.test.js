import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';

import Header from '../../../code/client/components/header';

describe('Header component', () => {
  const component = shallow(<Header />);

  it('should exist', () => {
    expect(component).toExist();
  });

  it('should have one logo linking to the "Home" page', () => {
    expect(component.find('Link[to="/"].header__branding').length).toEqual(1);
  });

  it('should have a menu with 5 menu items', () => {
    expect(component.find('.menu__link').length).toEqual(4);
  });

  it('should have one link to the "Users" page', () => {
    expect(component.find('Link[to="/users"]').length).toEqual(1);
  });

  it('should have one link to the "Home" page', () => {
    expect(component.find('IndexLink[to="/"]').length).toEqual(1);
  });

  it('should have one link to "not found" page', () => {
    expect(component.find('Link[to="/404"]').length).toEqual(1);
  });
});
