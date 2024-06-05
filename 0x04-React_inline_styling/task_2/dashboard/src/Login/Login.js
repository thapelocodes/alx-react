import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  "App-body": {
    fontSize: "1.2rem",
    padding: "1.5em",
    height: "90vh",
    paddingTop: "0",
    boxSizing: "border-box",
  },

  form: {
    display: "flex",
    gap: "2.5%",
    alignItems: "center",
  },

  input: {
    height: "1.4rem",
    marginLeft: "10px",
  },

  button: {
    margin: "2px",
    borderRadius: "5px",
    opacity: 0.8,
  },
});

const Login = () => {
  return (
    <React.Fragment>
      <div className={css(styles["App-body"])}>
        <p>Login to access the full dashboard</p>
        <form className={css(styles.form)}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className={css(styles.input)}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className={css(styles.input)}
          />
          <br />
          <button type="button" className={css(styles.button)}>
            OK
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
