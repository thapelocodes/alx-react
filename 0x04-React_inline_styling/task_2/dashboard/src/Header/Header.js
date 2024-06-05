import React from "react";
import holbertonlogo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  "App-header": {
    fontSize: "1.4rem",
    color: "#e0354b",
    display: "flex",
    alignItems: "center",
    padding: "1.2em",
  },

  logo: {
    width: "250px",
    // height: "250px",
  },
});

const Header = () => {
  return (
    <div className={css(styles["App-header"])}>
      <img src={holbertonlogo} alt="Holberton" className={css(styles.logo)} />
      <h1>School dashboard</h1>
    </div>
  );
};

export default Header;
