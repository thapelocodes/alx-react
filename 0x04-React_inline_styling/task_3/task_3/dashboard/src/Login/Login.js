import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const loginStyles = StyleSheet.create({
  'App-body': {
    fontSize: '1.2rem',
    padding: '0',
    height: '60%',
    '@media (max-width: 900px)': {
      fontSize: '1rem',
      padding: '1.5em',
      paddingTop: '0',
      margin: '0 0 0 1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      marginLeft: '-1.5rem',
    },
  },
  formInputs: {
    display: 'block',
    gap: '1em',
    alignItems: 'flex-start',
    padding: '0',
    '@media (max-width: 900px)': {
      display: 'flex',
      padding: '0',
      margin: '0',
      flexDirection: 'column',
    },
  },
  input: {
    height: '1rem',
    marginLeft: '0px',
    '@media (max-width: 900px)': {
      height: '1rem',
      marginLeft: '10px',
    },
  },
  inputRow: {
    display: 'flex',
    '@media (max-width: 900px)': {
      display: 'flex',
      padding: '0',
    },
  }
});

const Login = () => {
  return (
    <React.Fragment>
      <div className={css(loginStyles['App-body'])}>
        <p>Login to access the full dashboard</p>
        <form className={css(loginStyles.formInputs)}>
          <div className={css(loginStyles.inputRow)}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" className={css(loginStyles.input)} />
          </div>
          <div className={css(loginStyles.inputRow)}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" className={css(loginStyles.input)} />
          </div>
          <button type="button">OK</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;