import React from "react";
import Footer from "./Footer";
import { shallow } from "@cfaester/enzyme-adapter-react-18";

describe("<Footer />", () => {
  it("renders <Footer /> without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain("Copyright");
  });
});
