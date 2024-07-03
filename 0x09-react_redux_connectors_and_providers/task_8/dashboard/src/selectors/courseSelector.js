// selectors/courseSelector.js
import { createSelector } from "@reduxjs/toolkit";
import { List } from "immutable";

export const getCourses = (state) => state.get("courses");

export const getAllCourses = createSelector(getCourses, (courses) =>
  List(courses.valueSeq())
);
