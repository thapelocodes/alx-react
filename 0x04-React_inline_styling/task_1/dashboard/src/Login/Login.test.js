import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("<Login />", () => {
  it("renders <Login /> without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input").length).toEqual(2);
    expect(wrapper.find("label").length).toEqual(2);
  });
});
