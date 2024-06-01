import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notification component tests", () => {
  it("renders Notification component without crashing", () => {
    const notification = shallow(<Notifications />);
    expect(notification).toBeDefined();
  });

  it("renders ul", () => {
    const notification = shallow(<Notifications />);
    expect(notification.find("ul")).toBeDefined();
  });

  it("renders three notification items", () => {
    const notification = shallow(<Notifications />);
    expect(notification.find(<NotificationItem />)).toHaveLength(3);
  });

  it("renders correct text", () => {
    const notification = shallow(<Notifications />);
    expect(notification.find("p").text()).toBe(
      "Here is the list of notifications"
    );
  });
});
