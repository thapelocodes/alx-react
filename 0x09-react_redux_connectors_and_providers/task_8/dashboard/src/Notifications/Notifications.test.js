// Notifications/Notifications.test.js
/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow } from "enzyme";
import { Notifications } from "./Notifications";
import NotificationItem from "./NotificationItem";
import {
  fetchNotifications,
  setNotificationFilter,
} from "../actions/notificationActionCreators";

jest.mock("../actions/notificationActionCreators", () => ({
  fetchNotifications: jest.fn(),
  setNotificationFilter: jest.fn(),
}));

describe("Notifications component tests", () => {
  let listNotifications;
  beforeEach(() => {
    listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];
  });

  it("renders Notification component without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders correct number of NotificationItem components", () => {
    const wrapper = shallow(
      <Notifications listNotifications={listNotifications} />
    );
    expect(wrapper.find(NotificationItem)).toHaveLength(2);
  });

  it("calls setNotificationFilter with 'urgent' when clicking on the urgent button", () => {
    const wrapper = shallow(
      <Notifications listNotifications={listNotifications} />
    );
    wrapper.find("button").at(0).simulate("click");
    expect(setNotificationFilter).toHaveBeenCalledWith("urgent");
  });

  it("calls setNotificationFilter with 'default' when clicking on the default button", () => {
    const wrapper = shallow(
      <Notifications listNotifications={listNotifications} />
    );
    wrapper.find("button").at(1).simulate("click");
    expect(setNotificationFilter).toHaveBeenCalledWith("default");
  });
});
