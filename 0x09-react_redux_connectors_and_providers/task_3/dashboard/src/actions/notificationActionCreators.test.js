import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from "./notificationActionTypes";
import {
  markAsRead,
  setNotificationFilter,
} from "./notificationActionCreators";

describe("Tests for notificationActionCreators.", () => {
  it("verifies that calling the creator returns `{ type: MARK_AS_READ, index: 1}`", () => {
    expect(markAsRead(1)).toEqual({ type: MARK_AS_READ, index: 1 });
  });

  it("verifies that calling the creator returns `{ type: SET_TYPE_FILTER, filter: 'DEFAULT'}`", () => {
    expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual({
      type: SET_TYPE_FILTER,
      filter: "DEFAULT",
    });
  });
});
