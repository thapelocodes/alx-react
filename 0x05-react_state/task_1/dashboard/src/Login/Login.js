import React, { useEffect, useState } from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (email !== "" && password != "") {
      setEnableSubmit(true);
    } else {
      if (enableSubmit !== false) {
        setEnableSubmit(false);
      }
    }
  }, [email, password]);

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
            id="email"
            value={email}
            onChange={handleChangeEmail}
          />
          <label htmlFor="password">Password:</label>
          <input
            className={css(styles.input)}
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChangePassword}
          />
          <input type="submit" value="Ok" disabled={!enableSubmit} />
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
