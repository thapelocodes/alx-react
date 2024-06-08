import React from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles["login"])}>
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input
            className={css(styles.input)}
            type="email"
            name="email"
          ></input>
          <label htmlFor="password">Password:</label>
          <input
            className={css(styles.input)}
            type="password"
            name="password"
          ></input>
          <button>OK</button>
        </form>
      </div>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  login: {
    "@media (max-width: 900px)": {
      width: "17rem",
    },
  },

  input: {
    margin: "10px",
  },
});

export default Login;
