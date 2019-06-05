import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Home } from "./Home";
import { Button } from "antd";

describe("<Home /> View", () => {
  it("component is defined", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Home)).toBeDefined();
  });

  it("component matches snapshot", () => {
    const wrapper = shallow(<Home />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("goes to the steps page after button click", () => {
    const mockedClick = jest.fn();
    const wrapper = shallow(
      <Home routing={{ history: { push: mockedClick } }} />
    );
    wrapper.find(Button).simulate("click");
    expect(mockedClick).toBeCalled();
  });
});
