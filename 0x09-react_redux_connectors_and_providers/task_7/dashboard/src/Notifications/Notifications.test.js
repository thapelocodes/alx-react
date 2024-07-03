// Notifications/Notifications.test.js
/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow } from "enzyme";
import { Notifications } from "./Notifications";
import NotificationItem from "./NotificationItem";
import { getUnreadNotifications } from "../selectors/notificationSelector";
import { Map } from "immutable";

jest.mock("../selectors/notificationSelector", () => ({
  getUnreadNotifications: jest.fn(),
}));

describe("Notification component tests", () => {
  let listNotifications;
  let fetchNotifications;
  let handleDisplayDrawer;
  let handleHideDrawer;
  let markAsRead;

  beforeEach(() => {
    listNotifications = [
      { id: 1, type: "default", value: "New course available", isRead: false },
      { id: 2, type: "urgent", value: "New resume available", isRead: false },
    ];

    fetchNotifications = jest.fn();
    handleDisplayDrawer = jest.fn();
    handleHideDrawer = jest.fn();
    markAsRead = jest.fn();

    getUnreadNotifications.mockReturnValue(
      listNotifications.filter((notification) => !notification.isRead)
    );
  });

  it("renders Notification component without crashing", () => {
    const wrapper = shallow(
      <Notifications fetchNotifications={fetchNotifications} />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it("renders correct number of NotificationItem components", () => {
    const wrapper = shallow(
      <Notifications
        listNotifications={getUnreadNotifications()}
        fetchNotifications={fetchNotifications}
      />
    );
    expect(wrapper.find(NotificationItem)).toHaveLength(2);
  });

  it("renders message when listNotifications is empty", () => {
    getUnreadNotifications.mockReturnValue([]);
    const wrapper = shallow(
      <Notifications
        listNotifications={getUnreadNotifications()}
        fetchNotifications={fetchNotifications}
      />
    );
    expect(wrapper.find(".Notifications p").text()).toEqual(
      "Here is the list of notifications"
    );
  });

  it("renders loading message when loading is true", () => {
    const wrapper = shallow(
      <Notifications loading={true} fetchNotifications={fetchNotifications} />
    );
    expect(wrapper.find("p").text()).toEqual("Loading...");
  });

  it("does not render loading message when loading is false", () => {
    const wrapper = shallow(
      <Notifications loading={false} fetchNotifications={fetchNotifications} />
    );
    expect(wrapper.find("p").text()).toEqual(
      "Here is the list of notifications"
    );
  });

  it("calls fetchNotifications on componentDidMount", () => {
    shallow(<Notifications fetchNotifications={fetchNotifications} />);
    expect(fetchNotifications).toHaveBeenCalled();
  });

  it("calls handleDisplayDrawer when clicking on the menu item", () => {
    const wrapper = shallow(
      <Notifications
        handleDisplayDrawer={handleDisplayDrawer}
        fetchNotifications={fetchNotifications}
      />
    );
    wrapper.find(".menuItem").simulate("click");
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it("calls handleHideDrawer when clicking on the close button", () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        handleHideDrawer={handleHideDrawer}
        fetchNotifications={fetchNotifications}
      />
    );
    wrapper.find('button[aria-label="Close"]').simulate("click");
    expect(handleHideDrawer).toHaveBeenCalled();
  });

  it("calls markAsRead when clicking on a notification item", () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={getUnreadNotifications()}
        fetchNotifications={fetchNotifications}
        markAsRead={markAsRead}
      />
    );
    wrapper.find("NotificationItem").first().prop("markAsRead")(1);
    expect(markAsRead).toHaveBeenCalledWith(1);
  });
});
