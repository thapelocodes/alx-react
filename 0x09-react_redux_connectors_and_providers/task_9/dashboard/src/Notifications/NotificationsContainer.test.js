import React from "react";
import { shallow } from "enzyme";
import { NotificationsContainer } from "./NotificationsContainer";
import { fetchNotifications } from "../actions/notificationActionCreators";

jest.mock("../actions/notificationActionCreators", () => ({
  fetchNotifications: jest.fn(),
}));

describe("NotificationsContainer component tests", () => {
  it("calls fetchNotifications on mount", () => {
    const wrapper = shallow(
      <NotificationsContainer fetchNotifications={fetchNotifications} />
    );
    expect(fetchNotifications).toHaveBeenCalled();
  });
});
