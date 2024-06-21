import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actions/uiActionTypes";
import { Map } from "immutable";

export const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

export default function uiReducer(state = Map(initialState), action) {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set("isNotificationDrawerVisible", true);

    case HIDE_NOTIFICATION_DRAWER:
      return state.set("isNotificationDrawerVisible", false);

    case LOGIN_SUCCESS:
      return state.set(isUserLoggedIn, true);

    case LOGIN_FAILURE || LOGOUT:
      return state.set(isUserLoggedIn, false);

    default:
      break;
  }
  return state;
}
