import React from "react";
import Login from "./Login";
import { shallow } from "enzyme";

describe("<Login />", () => {
  it("renders <Login /> without crashing", () => {
    const login = shallow(<Login />);
    expect(login.find("input").length).toEqual(2);
    expect(login.find("label").length).toEqual(2);
  });
});
