import notificationReducer, { defaultState } from "./notificationReducer";
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  NotificationTypeFilters,
} from "../actions/notificationActionTypes";

describe("Tests for notificationReducer.", () => {
  it("verifies that `notificationReducer(undefined, {})` returns the default state.", () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(defaultState);
  });

  it("verifies that FETCH_NOTIFICATIONS_SUCCESS returns the correct data.", () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", value: "New data available" },
      ],
    };
    const expected = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" },
      ],
    };
    const state = notificationReducer(undefined, action);
    expect(state).toEqual(expected);
  });

  it("verifies that MARK_AS_READ returns the correct data.", () => {
    const initialState = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" },
      ],
    };
    const action = {
      type: MARK_AS_READ,
      index: 2,
    };
    const expected = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        { id: 2, isRead: true, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" },
      ],
    };
    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expected);
  });

  it("verifies that SET_TYPE_FILTER returns the correct data.", () => {
    const initialState = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" },
      ],
    };
    const action = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.URGENT,
    };
    const expected = {
      filter: NotificationTypeFilters.URGENT,
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" },
      ],
    };
    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expected);
  });
});
