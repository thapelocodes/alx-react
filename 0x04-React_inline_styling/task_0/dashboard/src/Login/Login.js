import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <React.Fragment>
            <div className="App-body">
                <p>Login to access the full dashboard</p>
                <form>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" /><br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" /><br />
                    <button type="button">OK</button>
                </form>
            </div>
        </React.Fragment>
    );
}

export default Login;