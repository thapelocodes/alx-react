import React from 'react';
import holbertonlogo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const headerStyles = StyleSheet.create({
    'App-header': {
		fontSize: '1.4rem',
		color: 'red',
		display: 'flex',
		alignItems: 'center',
		padding: '1.2em',
	},

	img: {
		width: '250px',
		height: '250px',
	},
});

const Header = () => {
    return (
        <div className={css(headerStyles['App-header'])}>
            <img src={holbertonlogo} alt='Holberton' className={css(headerStyles.img)} />
            <h1>School dashboard</h1>
        </div>
    );
};

export default Header;