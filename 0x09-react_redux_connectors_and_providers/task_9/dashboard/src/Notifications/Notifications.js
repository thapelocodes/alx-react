import React from "react";
import { StyleSheet, css } from "aphrodite";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";

const Notifications = ({ listNotifications, displayDrawer }) => {
  const handleSetFilter = (filter) => {
    // Implement your setNotificationFilter action here if needed
    console.log(`Setting filter to: ${filter}`);
  };

  return (
    <React.Fragment>
      {!displayDrawer ? (
        <div
          className={css(styles.menuItem)}
          onClick={() => handleSetFilter("default")}
        >
          <p>Your notifications</p>
        </div>
      ) : (
        <div className={css(styles.Notifications)}>
          <button
            style={{
              color: "#3a3a3a",
              fontWeight: "bold",
              background: "none",
              border: "none",
              fontSize: "15px",
              position: "absolute",
              right: "3px",
              top: "3px",
              cursor: "pointer",
              outline: "none",
            }}
            aria-label="Close"
            onClick={() => handleSetFilter("default")}
          >
            <img src={closeIcon} alt="close icon" width="10px" />
          </button>
          {listNotifications.length !== 0 ? (
            <p>Here is the list of notifications</p>
          ) : null}
          <ul>
            {listNotifications.length === 0 ? (
              <NotificationItem
                type="default"
                value="No new notification for now"
              />
            ) : null}
            {listNotifications.map((val) => (
              <NotificationItem
                type={val.type}
                value={val.value}
                html={val.html}
                key={val.id}
                markAsRead={this.markNotificationAsRead}
                id={val.id}
              />
            ))}
          </ul>
          <div>
            <button onClick={() => handleSetFilter("urgent")}>
              <span role="img" aria-label="urgent">
                ‼️
              </span>
            </button>
            <button onClick={() => handleSetFilter("default")}>
              <span role="img" aria-label="default">
                💠
              </span>
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  Notifications: {
    padding: "1em",
    border: "2px dashed red",
    position: "absolute",
    top: "1.8em",
    right: "0",
    zIndex: "100",
    "@media (max-width: 900px)": {
      width: "100%",
      padding: "0px",
      fontSize: 20,
      position: "relative",
      right: 0,
      left: 0,
      border: "none",
    },
  },

  menuItem: {
    position: "relative",
    zIndex: 100,
    textAlign: "right",
    ":hover": {
      cursor: "pointer",
      animationName: [opacityAnim, bounceAnim],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3",
    },
  },
});

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      value: PropTypes.string,
      html: PropTypes.object,
    })
  ),
  displayDrawer: PropTypes.bool,
};

export default Notifications;
