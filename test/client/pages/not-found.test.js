import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import NotFoundPage from '../../../code/client/pages/not-found';

const { describe, it } = global;

describe('Not Found Page', () => {
  it('renders without exploding', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toExist();
  });

  it('has a page title', () => {
    const wrapper = shallow(<NotFoundPage />);
    const expected = '404 - Page not found';
    const actual = wrapper.find('h1').text();
    expect(actual).toEqual(expected);
  });

  it('has a link to the home page', () => {
    const wrapper = shallow(<NotFoundPage />);
    const expected = 1;
    const actual = wrapper.find('Link[to="/"]').length;
    expect(actual).toEqual(expected);
  });
});
