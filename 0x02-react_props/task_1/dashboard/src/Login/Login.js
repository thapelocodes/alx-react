import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <React.Fragment>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
          <button type="button">OK</button>
        </form>
      </div>
    </React.Fragment>
  );
}
