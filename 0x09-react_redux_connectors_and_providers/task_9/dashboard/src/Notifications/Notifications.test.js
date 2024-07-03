import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notifications component tests", () => {
  let listNotifications;
  beforeEach(() => {
    listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];
  });

  it("renders Notification component without crashing", () => {
    const wrapper = shallow(
      <Notifications listNotifications={listNotifications} />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it("renders correct number of NotificationItem components", () => {
    const wrapper = shallow(
      <Notifications listNotifications={listNotifications} />
    );
    expect(wrapper.find(NotificationItem)).toHaveLength(2);
  });
});
