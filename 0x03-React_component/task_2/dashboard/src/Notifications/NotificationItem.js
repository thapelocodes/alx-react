import React from 'react';
import PropTypes from "prop-types";

const NotificationItem = ({ type, value, html, markAsRead, id }) => {
  const handleClick = () => {
    if (markAsRead) {
      markAsRead(id);
    }
  };

  if (html) {
    return <li data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }} onClick={handleClick} />;
  }

  return <li data-notification-type={type} onClick={handleClick}>{value}</li>;
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => { },
  id: 0
};

export default NotificationItem;
