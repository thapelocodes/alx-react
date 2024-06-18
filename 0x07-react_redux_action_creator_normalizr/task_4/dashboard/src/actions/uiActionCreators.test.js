import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";
import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from "./uiActionCreators";

describe("Tests for uiActionCreators.", () => {
  it("verifies that calling `login('example@email.com','password')` returns { type: LOGIN, user: { email: 'example@email.com', password: 'password' } }", () => {
    expect(login("example@email.com", "password")).toEqual({
      type: LOGIN,
      user: { email: "example@email.com", password: "password" },
    });
  });

  it("verifies that calling `logout()` returns { type: LOUGOUT }", () => {
    expect(logout()).toEqual({ type: LOGOUT });
  });

  it("verifies that calling `displayNotificationDrawer()` returns { type: DISPLAY_NOTIFICATION_DRAWER }", () => {
    expect(displayNotificationDrawer()).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
  });

  it("verifies that calling `hideNotificationDrawer()` returns { type: HIDE_NOTIFICATION_DRAWER }", () => {
    expect(hideNotificationDrawer()).toEqual({
      type: HIDE_NOTIFICATION_DRAWER,
    });
  });
});
