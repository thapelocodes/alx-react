import { createSelector } from "reselect";
import { Map } from "immutable";

export const filterTypeSelected = (state) => state.get("filter");
export const getNotifications = (state) => state.get("notifications");

export const getUnreadNotificationsByType = createSelector(
  [getNotifications, filterTypeSelected],
  (notifications, filter) => {
    const unreadNotifications = notifications.filter(
      (notification) => !Map(notification).get("isRead")
    );

    if (filter === "urgent") {
      return unreadNotifications.filter(
        (notification) => Map(notification).get("type") === "urgent"
      );
    }

    return unreadNotifications;
  }
);
