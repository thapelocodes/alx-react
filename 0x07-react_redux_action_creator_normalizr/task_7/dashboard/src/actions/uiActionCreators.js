import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./uiActionTypes";

// Action creators
export function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password },
  };
}

export const logout = () => ({ type: LOGOUT });

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

export const loginSuccess = () => ({ type: LOGIN_SUCCESS });

export const loginFailure = () => ({ type: LOGIN_FAILURE });

export function loginRequest(email, password) {
  return (dispatch) => {
    dispatch(login(email, password));
    return fetch("http://localhost:8564/login-success.json")
      .then((res) => res.json())
      .then((json) => dispatch(loginSuccess()))
      .catch((error) => dispatch(loginFailure()));
  };
}

// Bound action creators (these should be called within a component or another function where dispatch is available)
export const boundLogin = (email, password) => (dispatch) =>
  dispatch(login(email, password));
export const boundLogout = () => (dispatch) => dispatch(logout());
export const boundDisplayNotificationDrawer = () => (dispatch) =>
  dispatch(displayNotificationDrawer());
export const boundHideNotificationDrawer = () => (dispatch) =>
  dispatch(hideNotificationDrawer());
