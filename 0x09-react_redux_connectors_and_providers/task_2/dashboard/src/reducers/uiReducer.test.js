import uiReducer, { initialState } from "./uiReducer";
import { SELECT_COURSE } from "../actions/courseActionTypes";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  LOGIN,
  LOGOUT,
} from "../actions/uiActionTypes";

describe("Tests the reducer function", () => {
  it("verifies that the state returned by the uiReducer function equals the initial state when no action is passed", () => {
    const state = uiReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it("verifies that the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed", () => {
    const state = uiReducer(undefined, { type: SELECT_COURSE });
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it("verifies that the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property", () => {
    const state = uiReducer(undefined, {
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
    expect(state.toJS()).toEqual({
      ...initialState.toJS(),
      isNotificationDrawerVisible: true,
    });
  });

  it("verifies that the state returned by the uiReducer function, when the action LOGIN is passed, changes correctly the isUserLoggedIn property", () => {
    const user = { email: "test@test.com", password: "123", isLoggedIn: true };
    const state = uiReducer(undefined, {
      type: LOGIN,
      user,
    });
    expect(state.toJS()).toEqual({
      ...initialState.toJS(),
      isUserLoggedIn: true,
      user,
    });
  });

  it("verifies that the state returned by the uiReducer function, when the action LOGOUT is passed, changes correctly the isUserLoggedIn property", () => {
    const state = uiReducer(undefined, {
      type: LOGOUT,
    });
    expect(state.toJS()).toEqual({
      ...initialState.toJS(),
      isUserLoggedIn: false,
      user: null,
    });
  });
});
