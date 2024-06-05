import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	default: {
		color: 'blue',
		'@media (max-width: 900px)': {
			listStyleType: 'none',
			borderBottom: '1px solid #000000',
			padding: '0',
		},
	},
	urgent: {
		color: 'red',
		'@media (max-width: 900px)': {
			listStyleType: 'none',
			borderBottom: '1px solid #000000',
			padding: '0',
		},
	},
});

class NotificationItem extends React.PureComponent {
	render() {
		const { type, value, html, markAsRead, id } = this.props;
		return (
			<React.Fragment>
				{type && value ? (
					<li
						className={
							type === 'default' ? css(styles.default) : css(styles.urgent)
						}
						onClick={() => markAsRead(id)} data-notification-type={type}>
						{value}
					</li>
				) : null}
				{html ? (
					<li
						className={css(styles.urgent)}
						onClick={() => markAsRead(id)}
						data-urgent
						dangerouslySetInnerHTML={{ __html: html }}
					></li>
				) : null}
			</React.Fragment>
		);
	}
}

NotificationItem.propTypes = {
	type: PropTypes.string.isRequired,
	value: PropTypes.string,
	__html: PropTypes.shape({
		html: PropTypes.string,
	}),
};

NotificationItem.defaultProps = {
	type: 'default',
};

export default NotificationItem;