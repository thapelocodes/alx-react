import React from 'react';
import holbertonlogo from '../assets/holberton-logo.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className='App-header'>
            <img src={holbertonlogo} alt='Holberton' />
            <h1>School dashboard</h1>
        </div>
    );
};

export default Header;