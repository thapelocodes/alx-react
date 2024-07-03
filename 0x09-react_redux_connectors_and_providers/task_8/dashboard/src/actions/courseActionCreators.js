import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index: index,
  };
}

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index: index,
  };
}

export function setCourse(course) {
  return {
    type: SET_COURSES,
    courses,
  };
}

export const boundSelectCourse = (index) => (dispatch) =>
  dispatch(selectCourse(index));
export const boundUnSelectCourse = (index) => (dispatch) =>
  dispatch(unSelectCourse(index));

export const fetchCourses = () => async (dispatch) => {
  try {
    const response = await fetch("/dist/courses.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const courses = await response.json();
    dispatch(setCourses(courses));
  } catch (error) {
    throw new Error("Failed to fetch courses", error);
  }
};
