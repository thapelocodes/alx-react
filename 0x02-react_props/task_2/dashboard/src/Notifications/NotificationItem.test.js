import React from "react";
import NotificationItem from "./NotificationItem";
import { shallow } from "enzyme";

describe("rendering components", () => {
  it("renders NotificationItem component without crashing", () => {
    const notifItem = shallow(<NotificationItem />);

    expect(notifItem.exists()).toBe(true);
  });

  it('renders correct html from type="default" value="test" props', () => {
    const notifItem = shallow(<NotificationItem />);

    notifItem.setProps({ type: "default", value: "test" });
    expect(notifItem.html()).toEqual(
      '<li data-notification-type="default">test</li>'
    );
  });

  it('renders correct html from  html="<u>test</u>" props', () => {
    const notifItem = shallow(<NotificationItem />);

    notifItem.setProps({ html: "<u>test</u>" });
    expect(notifItem.html()).toEqual('<li data-urgent="true"><u>test</u></li>');
  });
});
