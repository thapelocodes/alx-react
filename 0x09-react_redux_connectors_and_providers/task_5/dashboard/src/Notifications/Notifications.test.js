// Notifications/Notifications.test.js
/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow } from "enzyme";
import { Notifications } from "./Notifications";
import NotificationItem from "./NotificationItem";
import { Map } from "immutable";

describe("Notification component tests", () => {
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

  it("renders message when listNotifications is empty", () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper.find(".Notifications p").text()).toEqual(
      "Here is the list of notifications"
    );
  });

  it("renders loading message when loading is true", () => {
    const wrapper = shallow(<Notifications loading={true} />);
    expect(wrapper.find("p").text()).toEqual("Loading...");
  });

  it("does not render loading message when loading is false", () => {
    const wrapper = shallow(<Notifications loading={false} />);
    expect(wrapper.find("p").text()).toEqual(
      "Here is the list of notifications"
    );
  });
});
