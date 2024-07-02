import { Map } from "immutable";
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from "./notificationSelector";
import notificationReducer from "../reducers/notificationReducer";
import { MARK_AS_READ } from "../actions/notificationActionTypes";
import { NotificationTypeFilters } from "../actions/notificationActionTypes";

describe("Tests for Notification Selectors.", () => {
  let state;

  beforeEach(() => {
    const initialState = Map({
      filter: NotificationTypeFilters.DEFAULT,
      notifications: Map({
        1: {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        2: {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        3: {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      }),
    });
    const action = {
      type: MARK_AS_READ,
      index: 2,
    };
    state = notificationReducer(initialState, action);
  });

  it("verifies that filterTypeSelected works as expected.", () => {
    const filter = filterTypeSelected(state);
    expect(filter).toEqual(NotificationTypeFilters.DEFAULT);
  });

  it("verifies that getNotifications returns a list of notifications.", () => {
    const notifications = getNotifications(state);
    expect(notifications).toEqual(state.get("notifications"));
  });

  it("verifies that getUnreadNotifications returns a list of unread notifications.", () => {
    const unread = getUnreadNotifications(state);
    const expected = Map({
      1: {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available",
      },
      3: {
        id: 3,
        isRead: false,
        type: "urgent",
        value: "New data available",
      },
    });
    expect(unread).toEqual(expected);
  });
});
