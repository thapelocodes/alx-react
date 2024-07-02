/**
 * @jest-environment jsdom
 */
import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow, mount } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import { AppContext, user, logOut } from "./AppContext";
import { fromJS } from "immutable";
import { mapStateToProps } from "./App";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import uiReducer from "../reducers/uiReducer";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const mockStore = configureStore([]);

const TestWrapper = ({ children, store, contextValue }) => (
  <Provider store={store}>
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  </Provider>
);

describe("rendering components", () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore({
      uiReducer: fromJS({ isUserLoggedIn: false }),
    });
    wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  afterEach(() => wrapper.unmount());

  it("renders App component without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("contains Notifications component", () => {
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it("contains Header component", () => {
    expect(wrapper.contains(<Header />)).toBe(true);
  });

  it("contains Login component", () => {
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it("contains Footer component", () => {
    expect(wrapper.contains(<Footer />)).toBe(true);
  });

  it("checks CourseList is not rendered", () => {
    expect(wrapper.contains(<CourseList />)).toBe(false);
  });
});

describe("when isLogged in is true", () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore({
      uiReducer: fromJS({ isUserLoggedIn: true }),
    });
    wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("checks Login is not rendered", () => {
    expect(wrapper.contains(<Login />)).toBe(false);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it("checks CourseList is rendered", () => {
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it(`Tests that the logIn function updates user's state correctly`, () => {
    const app = mount(
      <TestWrapper store={store} contextValue={{ user, logOut }}>
        <App />
      </TestWrapper>
    );

    const myUser = {
      email: "testy@gmail.com",
      password: "testy",
      isLoggedIn: true,
    };

    expect(app.state().user).toEqual(user);
    const instance = app.instance();
    instance.logIn(myUser.email, myUser.password);
    app.update();
    expect(app.state().user).toEqual(myUser);
    app.unmount();
  });

  it(`Tests that the logOut function updates user's state correctly`, () => {
    const app = mount(
      <TestWrapper store={store} contextValue={{ user, logOut }}>
        <App />
      </TestWrapper>
    );

    const myUser = {
      email: "testy@gmail.com",
      password: "testy",
      isLoggedIn: true,
    };

    expect(app.state().user).toEqual(user);
    const instance = app.instance();
    instance.logOut();
    expect(app.state().user).toEqual(user);
    app.unmount();
  });
});

describe("markNotificationAsRead works as intended", () => {
  it("markNotificationAsRead deletes the notifications with the id passed", () => {
    const context = {
      user: {
        ...user,
      },
      logOut: jest.fn(),
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, html: { __html: jest.fn() }, type: "urgent" },
      ],
    };

    const wrapper = mount(
      <TestWrapper store={store} contextValue={{ user, logOut }}>
        <App />
      </TestWrapper>
    );

    wrapper.instance().markNotificationAsRead(3);
    wrapper.update();

    expect(wrapper.state().listNotifications).toEqual([
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ]);
    expect(wrapper.state().listNotifications.length).toBe(2);
    expect(wrapper.state().listNotifications[3]).toBe(undefined);
    wrapper.unmount();
  });
});

describe("Tests mapStateToProps.", () => {
  it("verifies that the function returns the right object when passing the state.", () => {
    let state = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: true,
    });
    const props = mapStateToProps(state);
    expect(props).toEqual({ isLoggedIn: true, displayDrawer: true });
  });

  it("verifies that the function returns the right object when passing the state.", () => {
    let state = fromJS({
      isUserLoggedIn: false,
      isNotificationDrawerVisible: false,
    });
    const props = mapStateToProps(state);
    expect(props).toEqual({ isLoggedIn: false, displayDrawer: false });
  });
});
