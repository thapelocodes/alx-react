import { shallow } from "enzyme";
import React from "react";
import Footer from "./Footer";
import { getFullYear, getFooterCopy } from "../utils/utils";

describe("Footer test", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("should render the text Copyright ${getFullYear()} - ${getFooterCopy(true)}", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toEqual(
      `Copyright ${getFullYear()} - ${getFooterCopy()}`
    );
  });

  it("should not render a link when user is logged out", () => {
    const wrapper = shallow(<Footer user={null} />);
    expect(wrapper.find("a").length).toBe(0);
    expect(wrapper.find("a").exists()).toBe(false);
    expect(wrapper.text()).not.toContain("Contact us");
  });

  it("should render a link when user is logged in", () => {
    const user = { email: "test@test.com", isLoggedIn: true };
    const wrapper = shallow(<Footer user={user} />);
    expect(wrapper.find("a").length).toBe(1);
    expect(wrapper.find("a").exists()).toBe(true);
    expect(wrapper.text()).toContain("Contact us");
  });
});
