import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import BodySection from './BodySection';
import PropTypes from 'prop-types';

const bodyStyles = StyleSheet.create({
	bodySectionWithMargin: {
		marginBottom: '40px',
	},
});

const BodySectionWithMarginBottom = ({ title, children }) => {
	return (
		<div className={css(bodyStyles.bodySectionWithMargin)}>
			<BodySection title={title}>{children}</BodySection>
		</div>
	);
};

BodySectionWithMarginBottom.propTypes = {
	title: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
};

export default BodySectionWithMarginBottom;