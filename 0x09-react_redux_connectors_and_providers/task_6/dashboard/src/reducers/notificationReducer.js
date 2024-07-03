import { Map } from "immutable";
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_LOADING_STATE,
  NotificationTypeFilters,
} from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notifications";

export const defaultState = Map({
  notifications: Map(),
  filter: NotificationTypeFilters.DEFAULT,
  loading: false,
});

export default function notificationReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedNotifications = notificationsNormalizer(action.data);
      return state.mergeDeep({
        notifications: normalizedNotifications,
      });

    case MARK_AS_READ:
      return state.setIn(
        ["notifications", String(action.index), "isRead"],
        true
      );

    case SET_TYPE_FILTER:
      return state.set("filter", action.filter);

    case SET_LOADING_STATE:
      return state.set("loading", action.isLoading);

    default:
      return state;
  }
}
