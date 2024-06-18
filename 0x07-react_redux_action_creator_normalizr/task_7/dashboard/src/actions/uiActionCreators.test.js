import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import fetchMock from "fetch-mock";
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./uiActionTypes";
import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
  loginSuccess,
  loginFailure,
} from "./uiActionCreators";

// Initialize mock store with thunk middleware
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Tests for uiActionCreators.", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("verifies that calling `login('example@email.com','password')` returns { type: LOGIN, user: { email: 'example@email.com', password: 'password' } }", () => {
    expect(login("example@email.com", "password")).toEqual({
      type: LOGIN,
      user: { email: "example@email.com", password: "password" },
    });
  });

  it("verifies that calling `logout()` returns { type: LOGOUT }", () => {
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

  it("should pass LOGIN and LOGIN_SUCCESS to the store if API returns the right response", () => {
    fetchMock.getOnce("http://localhost:8564/login-success.json", {
      body: {
        first_name: "Johann",
        last_name: "Salva",
        email: "johann.salva@alxafrica.nz",
        profile_picture: "http://placehold.it/32x32",
      },
      headers: { "content-type": "application/json" },
    });

    const store = mockStore({});
    const email = "johann.salva@alxafrica.nz";
    const password = "password";

    return store.dispatch(loginRequest(email, password)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({ type: LOGIN, user: { email, password } });
      expect(actions[1]).toEqual({ type: LOGIN_SUCCESS });
    });
  });

  it("should pass LOGIN and LOGIN_FAILURE if API query fails", () => {
    fetchMock.getOnce("http://localhost:8564/login-success.json", 400);

    const store = mockStore({});
    const email = "johann.salva@alxafrica.nz";
    const password = "password";

    return store.dispatch(loginRequest(email, password)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({ type: LOGIN, user: { email, password } });
      expect(actions[1]).toEqual({ type: LOGIN_FAILURE });
    });
  });
});
