import React from "react";
import closeIcon from "../assets/close-icon.jpg";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  Notifications: {
    border: "2px dashed #e4384f",
    paddingLeft: "5px",
    paddingTop: "0",
    paddingBottom: "10px",
    width: "50%",
    float: "right",

    "paragraph, unorderedList": {
      fontSize: "1.2rem",
      fontFamily: "'Times New Roman', Times, serif",
    },
  },

  "[data-notification-type='default']": {
    color: "blue",
  },

  "[data-urgent],[data-notification-type='urgent']": {
    color: "red",
  },

  menuItem: {
    fontSize: "1.2rem",
    marginTop: "-0.9rem",
    textAlign: "right",
  },

  "flex-area": {
    width: "70%",
    right: "0",
    position: "absolute",
    paddingRight: "20px",
  },
});

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.displayDrawer ? (
          <div className={css(styles["flex-area"])}>
            <div className={css(styles.menuItem)}>
              <p className={css(styles.paragraph)}>Your notifications</p>
            </div>
            <div className={css(styles.Notifications)}>
              <ul className={css(styles.unorderedList)}>
                {this.props.listNotifications &&
                this.props.listNotifications.length > 0 ? (
                  this.props.listNotifications.map(
                    ({ id, html, type, value }) => (
                      <NotificationItem
                        key={id}
                        markAsRead={this.markAsRead}
                        type={type}
                        value={value}
                        html={html}
                      />
                    )
                  )
                ) : (
                  <div className="notification-header">
                    <NotificationItem value="No new notification for now" />
                    <button
                      aria-label="Close"
                      onClick={console.log("Close button has been clicked")}
                    >
                      <img
                        style={{ display: "inline" }}
                        src={closeIcon}
                        alt="Close"
                      />
                    </button>
                  </div>
                )}
              </ul>
            </div>
          </div>
        ) : (
          <div className={css(styles.menuItem)}>
            <p className={css(styles.paragraph)}>Your notifications</p>
          </div>
        )}
      </React.Fragment>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
