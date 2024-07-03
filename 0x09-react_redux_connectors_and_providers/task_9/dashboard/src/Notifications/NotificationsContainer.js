import React, { useEffect } from "react";
import { connect } from "react-redux";
import Notifications from "./Notifications";
import { fetchNotifications } from "../actions/notificationActionCreators";
import { getUnreadNotificationsByType } from "../selectors/notificationSelector";

const NotificationsContainer = ({
  fetchNotifications,
  listNotifications,
  isNotificationDrawerVisible,
}) => {
  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  return (
    <Notifications
      listNotifications={listNotifications}
      displayDrawer={isNotificationDrawerVisible}
    />
  );
};

const mapStateToProps = (state) => ({
  listNotifications: getUnreadNotificationsByType(state),
  isNotificationDrawerVisible: state.get("isNotificationDrawerVisible"),
});

const mapDispatchToProps = {
  fetchNotifications,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsContainer);
