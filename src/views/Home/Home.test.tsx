import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Home from './Home';

describe('Test <Home />', () => {
  it('component is defined', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Home)).toBeDefined();
  });

  it('component matches snapshot', () => {
    const wrapper = shallow(<Home />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
