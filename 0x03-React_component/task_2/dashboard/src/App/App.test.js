import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should contain the Notifications component', () => {
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  it('should contain the Header component', () => {
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('should contain the Login component', () => {
    expect(wrapper.find(Login).exists()).toBe(true);
  });

  it('should contain the Footer component', () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  it('does not render CourseList if logged out', () => {
    wrapper.setProps({ isLoggedIn: false });
    expect(wrapper.contains(<CourseList />)).toBe(false);
  });

  it('renders CourseList if logged in', () => {
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.contains(<CourseList />)).toBe(true);
    expect(wrapper.contains(<Login />)).toBe(false);
  });

  describe('logOut functionality', () => {
    let originalAlert;

    beforeAll(() => {
      originalAlert = window.alert;
      window.alert = jest.fn();
    });

    afterAll(() => {
      window.alert = originalAlert;
    });

    it('calls logOut and displays alert when ctrl+h is pressed', () => {
      const logOutMock = jest.fn();
      const component = mount(<App isLoggedIn={true} logOut={logOutMock} />);

      // Simulate ctrl+h key press
      const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
      window.dispatchEvent(event);

      expect(window.alert).toHaveBeenCalledWith('Logging you out');
      expect(logOutMock).toHaveBeenCalled();

      component.unmount();
    });
  });
});
