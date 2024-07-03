import notificationReducer, { defaultState } from "./notificationReducer";
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_LOADING_STATE,
  NotificationTypeFilters,
} from "../actions/notificationActionTypes";
import { Map } from "immutable";

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
    const expected = Map({
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
      loading: false,
    });
    const state = notificationReducer(undefined, action);
    expect(state).toEqual(expected);
  });

  it("verifies that MARK_AS_READ returns the correct data.", () => {
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
      loading: false,
    });
    const action = {
      type: MARK_AS_READ,
      index: 2,
    };
    const expected = Map({
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
          isRead: true,
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
      loading: false,
    });
    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expected);
  });

  it("verifies that SET_TYPE_FILTER returns the correct data.", () => {
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
      loading: false,
    });
    const action = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.URGENT,
    };
    const expected = Map({
      filter: NotificationTypeFilters.URGENT,
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
      loading: false,
    });
    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expected);
  });

  it("verifies that SET_LOADING_STATE returns the correct data.", () => {
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
      loading: false,
    });
    const action = {
      type: SET_LOADING_STATE,
      loading: true,
    };
    const expected = initialState.set("loading", true);
    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expected);
  });
});
