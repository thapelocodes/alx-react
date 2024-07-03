import React from "react";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  fetchCourses,
  selectCourse,
  unSelectCourse,
} from "./actions/courseActionCreators";

jest.mock("./actions/courseActionCreators", () => ({
  fetchCourses: jest.fn(),
  selectCourse: jest.fn(),
  unSelectCourse: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const listCourses = [
  { id: "1", name: "ES6", credit: 60 },
  { id: "2", name: "Webpack", credit: 20 },
  { id: "3", name: "React", credit: 40 },
];

describe("CourseList component tests", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      courses: {
        listCourses,
      },
    });
  });

  it("should render without crashing", () => {
    const wrapper = shallow(<CourseList store={store} />).dive();

    expect(wrapper.exists()).toBe(true);
  });

  it("renders correct number of rows", () => {
    const wrapper = shallow(<CourseList store={store} />).dive();

    expect(wrapper.find("thead").children()).toHaveLength(2);
    expect(wrapper.find("tbody").children()).toHaveLength(3);
  });

  it("calls fetchCourses action creator on mount", () => {
    shallow(<CourseList store={store} />);

    expect(fetchCourses).toHaveBeenCalledTimes(1);
  });

  it("calls selectCourse action creator when onChangeRow is called with checked=true", () => {
    const wrapper = shallow(<CourseList store={store} />).dive();
    const instance = wrapper.instance();

    instance.onChangeRow("1", true);
    expect(selectCourse).toHaveBeenCalledWith("1");
  });

  it("calls unSelectCourse action creator when onChangeRow is called with checked=false", () => {
    const wrapper = shallow(<CourseList store={store} />).dive();
    const instance = wrapper.instance();

    instance.onChangeRow("1", false);
    expect(unSelectCourse).toHaveBeenCalledWith("1");
  });
});
