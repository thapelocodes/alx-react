// App/App.test.js
/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { StyleSheetTestUtils } from "aphrodite";
import { fromJS } from "immutable";
import { mapStateToProps } from "./App";
import { combineReducers, createStore } from "redux";
import rootReducer from "../reducers/rootReducer"; // Import your rootReducer

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("rendering components", () => {
  let wrapper;

  it("renders App component without crashing", () => {
    const store = createStore(rootReducer); // Create store with rootReducer
    wrapper = shallow(<App isLoggedIn={false} store={store} />); // Pass store as prop
    expect(wrapper.exists()).toBe(true);
  });

  it("contains Notifications component", () => {
    const store = createStore(rootReducer);
    wrapper = shallow(<App isLoggedIn={false} store={store} />);
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it("contains Header component", () => {
    const store = createStore(rootReducer);
    wrapper = shallow(<App isLoggedIn={false} store={store} />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it("contains Login component", () => {
    const store = createStore(rootReducer);
    wrapper = shallow(<App isLoggedIn={false} store={store} />);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it("contains Footer component", () => {
    const store = createStore(rootReducer);
    wrapper = shallow(<App isLoggedIn={false} store={store} />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it("checks CourseList is not rendered", () => {
    const store = createStore(rootReducer);
    wrapper = shallow(<App isLoggedIn={false} store={store} />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it("checks CourseList is rendered when isLoggedIn is true", () => {
    const store = createStore(rootReducer);
    wrapper = shallow(<App isLoggedIn={true} store={store} />);
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });
});

describe("markNotificationAsRead works as intended", () => {
  it("markNotificationAsRead deletes the notifications with the id passed", () => {
    const store = createStore(rootReducer);
    const wrapper = shallow(<App isLoggedIn={true} store={store} />);
    wrapper.setState({
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: "html" },
      ],
    });

    wrapper.instance().markNotificationAsRead(3);
    wrapper.update();

    expect(wrapper.state().listNotifications).toEqual([
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ]);
  });
});

describe("Tests mapStateToProps", () => {
  it("verifies that the function returns the right object when passing the state", () => {
    const store = createStore(rootReducer);
    let state = store.getState(); // Get the current state from the store
    const props = mapStateToProps(state);
    expect(props).toEqual({ isLoggedIn: true, displayDrawer: true });
  });

  it("verifies that the function returns the right object when passing the state", () => {
    const store = createStore(rootReducer);
    let state = store.getState(); // Get the current state from the store
    const props = mapStateToProps(state);
    expect(props).toEqual({ isLoggedIn: false, displayDrawer: false });
  });
});
