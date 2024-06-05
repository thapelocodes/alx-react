import React from 'react';
import closeIcon from '../assets/close-icon.jpg';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const notificationStyles = StyleSheet.create({
  Notifications: {
    padding: '1em',
    border: '2px dashed red',
    position: "absolute",
    top: "1.8em",
    marginTop: '2rem',
    marginRight: '1rem',

    '@media (max-width: 900px)': {
      display: 'block',
      height: '100vh',
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '-1.6rem',
      border: 'none',
      fontSize: '20px',
      padding: '0',
      background: '#ffffff',

    },
  },
  menuItem: {
    textAlign: 'right',
    padding: '1rem',
    paddingTop: '0',
  },
  notificationHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  flexArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  ulNav: {
    '@media (max-width: 900px)': {
      paddingInlineStart: '15px',
    },
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
          <div className={css(notificationStyles.flexArea)}>
            <div className={css(notificationStyles.menuItem)}>
              <p>Your notifications</p>
            </div>
            <div className={css(notificationStyles.Notifications)}>
              <button
                style={{
                  color: "#3a3a3a", fontWeight: "bold", background: "none", border: "none", fontSize: "15px",
                  position: "absolute",
                  right: "10px",
                  cursor: "pointer",
                  outline: "none",
                }}
                aria-label='Close'
                onClick={console.log('Close button has been clicked')}
              >
                <img
                  style={{ display: 'inline' }}
                  src={closeIcon}
                  alt='Close'
                  width="15px"
                />
              </button>
              <p>Here is the list of notifications</p>
              <ul className={css(notificationStyles.ulNav)}>
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
                  <div className={css(notificationStyles.notificationHeader)}>
                    <NotificationItem value='No new notification for now' />
                  </div>
                )}
              </ul>
            </div>
          </div>
        ) : (
          <div className='menuItem'>
            <p>Your notifications</p>
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
  displayDrawer: true,
  listNotifications: [],
};

export default Notifications;