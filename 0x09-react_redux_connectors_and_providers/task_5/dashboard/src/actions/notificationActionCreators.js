import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_LOADING_STATE,
} from "./notificationActionTypes";

export const markAsRead = (index) => {
  return {
    type: MARK_AS_READ,
    index: index,
  };
};

export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter: filter,
  };
};

export const setLoadingState = (isLoading) => ({
  type: SET_LOADING_STATE,
  isLoading,
});

export const setNotifications = (notifications) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  notifications,
});

export const fetchNotifications = () => {
  return async (dispatch) => {
    dispatch(setLoadingState(true));
    try {
      const response = await fetch("/notifications.json");
      const notifications = await response.json();
      dispatch(setNotifications(notifications));
    } finally {
      dispatch(setLoadingState(false));
    }
  };
};

export const boundMarkAsRead = (index) => (dispatch) =>
  dispatch(markAsRead(index));
export const boundSetNotificationFilter = (filter) => (dispatch) =>
  dispatch(setNotificationFilter(filter));
