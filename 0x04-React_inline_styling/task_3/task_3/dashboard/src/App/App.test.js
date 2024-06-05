/**
 * @jest-environment jsdom
 */
import React from 'react';
import App from '../../../../task_0/dashboard/src/App/App';
import Login from '../../../../task_0/dashboard/src/Login/Login';
import Header from '../../../../task_0/dashboard/src/Header/Header';
import Footer from '../../../../task_0/dashboard/src/Footer/Footer';
import Notifications from '../../../../task_0/dashboard/src/Notifications/Notifications';
import CourseList from '../../../../task_0/dashboard/src/CourseList/CourseList';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});


describe('App tests', () => {
  it('renders without crashing', () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });
  it('should render Notifications component', () => {
    const component = shallow(<App />);

    expect(component.containsMatchingElement(<Notifications />)).toEqual(false);
  });
  it('should render Header component', () => {
    const component = shallow(<App />);

    expect(component.contains(<Header />)).toBe(true);
  });
  it('should render Login Component', () => {
    const component = shallow(<App />);

    expect(component.contains(<Login />)).toBe(true);
  });
  it('should render Footer component', () => {
    const component = shallow(<App />);

    expect(component.contains(<Footer />)).toBe(true);
  });
  it('does not render courselist if logged out', () => {
    const component = shallow(<App />);

    component.setProps({ isLogedIn: false });

    expect(component.contains(<CourseList />)).toBe(false);
  });
  it('renders courselist if logged in', () => {
    const component = shallow(<App isLoggedIn={true} />);

    expect(component.containsMatchingElement(<CourseList />)).toEqual(false);
    expect(component.contains(<Login />)).toBe(false);
  });
});

describe('When ctrl + h is pressed', () => {
  it('calls logOut function', () => {
    const mocked = jest.fn();
    const wrapper = mount(<App logOut={mocked} />);
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(mocked).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });

  window.alert = jest.fn();
  it('checks that alert function is called', () => {
    const wrapper = mount(<App />);
    const spy = jest.spyOn(window, 'alert');
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
    wrapper.unmount();
  });

  it('checks that the alert is "Logging you out"', () => {
    const wrapper = mount(<App />);
    const spy = jest.spyOn(window, 'alert');
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalledWith('Logging you out');
    jest.restoreAllMocks();
    wrapper.unmount();
  });
  window.alert.mockClear();
});