import React, { useContext } from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { AppContext } from "../App/AppContext";
import { logout } from "../actions/uiActionCreators";

function Header() {
  const { user, logOut } = useContext(AppContext);

  return (
    <>
      <div className={css(styles["App-header"])}>
        <img src={logo} className={css(styles.img)} alt="logo" />
        <h1>School dashboard</h1>
      </div>

      {user.isLoggedIn && (
        <section className={css(styles.greeting)} id="logoutSection">
          Welcome<strong> {user.email} </strong>
          <em>
            <a href="#" onClick={logOut}>
              (logout)
            </a>
          </em>
        </section>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  "App-header": {
    fontSize: "1.4rem",
    color: "#e0354b",
    display: "flex",
    alignItems: "center",
    borderBottom: "3px solid #e0354b",

    "@media only screen and (max-width: 900px)": {
      fontSize: "3.5vw",
    },
  },

  img: {
    width: "200px",
    height: "200px",
  },
});

const mapStateToProps = (state) => ({ user: state.get("user") });

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
