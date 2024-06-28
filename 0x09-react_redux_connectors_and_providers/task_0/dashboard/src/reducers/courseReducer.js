import { Map } from "immutable";
import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from "../actions/courseActionTypes";
import coursesNormalizer from "../schema/courses";

export const defaultState = Map();

export default function courseReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const normalizedCourses = coursesNormalizer(action.data);
      return state.merge(normalizedCourses);

    case SELECT_COURSE:
      return state.setIn([String(action.index), "isSelected"], true);

    case UNSELECT_COURSE:
      return state.setIn([String(action.index), "isSelected"], false);

    default:
      return state;
  }
}
