import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

const appStyles = StyleSheet.create({
  App: {
    height: '100%',
    maxWidth: '100vw',
    border: '1px solid grey',
    // '@media (max-width: 900px)': {
    //   border: '1px solid grey',
    // },
  },
  headingSection: {
    borderBottom: '4px solid red',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
  },
  AppFooter: {
    borderTop: '4px solid red',
    fontSize: '1.4rem',
    padding: '0.5em',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  bodySection: {
    '@media (max-width: 900px)': {
      padding: '2rem 2rem 0 2.5rem',
    },
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: getLatestNotification() },
  ];

  handleKeyPress(keys) {
    if (keys.ctrlKey && keys.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return (
      <React.Fragment>
        <div className={css(appStyles.App)}>
          <div className={css(appStyles.headingSection)}>
            <Notifications listNotifications={this.listNotifications} />
            <Header />
          </div>
          <div className={css(appStyles.bodySection)}>
            {this.props.isLoggedIn ? (
              <BodySectionWithMarginBottom title='Course list'>
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title='Log in to continue'>
                <Login />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </BodySection>
          </div>
          <Footer className={css(appStyles.AppFooter)} />
        </div>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => { }
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

export default App;