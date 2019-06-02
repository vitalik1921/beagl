import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Steps from "./Steps";

describe("<Steps /> View", () => {
  it("component is defined", () => {
    const wrapper = shallow(<Steps />);
    expect(wrapper.find(Steps)).toBeDefined();
  });

  it("component matches snapshot", () => {
    const wrapper = shallow(<Steps />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
