import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Wizard } from "./Wizard";
import { RouterStore } from "mobx-react-router";
import { match } from "react-router-dom";

describe("<Steps /> View", () => {
  const router = {} as RouterStore;
  const match = {} as match;

  it("component is defined", () => {
    const wrapper = shallow(<Wizard routing={router} match={match} />);
    expect(wrapper.find(Wizard)).toBeDefined();
  });

  it("component matches snapshot", () => {
    const wrapper = shallow(<Wizard routing={router} match={match} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  // it('changes steps', () => {
  //   const wrapper = shallow(<Wizard />);
  //   const mockSetState = jest.fn().mockImplementation(() => true);

  //   jest.mock('react', () => ({
  //     ...React,
  //     useState: () => console.log('we here'),
  //   }));

  //   const buttonPrev = wrapper.find('Button[type="default"]');
  //   const buttonNext = wrapper.find('Button[type="primary"]');

  //   expect(buttonPrev).toHaveLength(1);
  //   expect(buttonNext).toHaveLength(1);

  //   buttonPrev.simulate('click');
  //   buttonNext.simulate('click');

  //   expect(mockSetState).toHaveBeenCalledTimes(2);
  //   // jest.unmock('react');
  // });

  // it('changes location on next and prev button', () => {
  //   const mockSetState = jest.fn();
  //   const wrapper = shallow(<Wizard routing={{history: { push: mockSetState }}}/>);

  //   const buttonPrev = wrapper.find('Button[type="default"]').dive();
  //   const buttonNext = wrapper.find('Button[type="primary"]');

  //   expect(buttonNext).toHaveLength(1);
  //   expect(buttonPrev).toHaveLength(1);

  //   buttonNext.simulate('click');
  //   buttonPrev.simulate('click');

  //   expect(mockSetState).toHaveBeenCalledTimes(2);
  // });
});
