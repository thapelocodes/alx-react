import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

describe("<Header />", () => {
  it("renders <Header /> without crashing", () => {
    const header = shallow(<Header />);
    expect(header.find("img").exists()).toBe(true);
    expect(header.find("h1").exists()).toBe(true);
  });
});
