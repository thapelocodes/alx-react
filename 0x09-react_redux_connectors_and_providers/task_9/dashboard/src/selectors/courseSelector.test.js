// selectors/courseSelector.test.js
import { fromJS } from "immutable";
import { getAllCourses } from "./courseSelector";

describe("courseSelector tests", () => {
  it("should return a List of all course entities", () => {
    const state = fromJS({
      courses: {
        1: { id: 1, name: "Course 1" },
        2: { id: 2, name: "Course 2" },
      },
    });

    const expectedResult = fromJS([
      { id: 1, name: "Course 1" },
      { id: 2, name: "Course 2" },
    ]);

    const result = getAllCourses(state);

    expect(result).toEqual(expectedResult);
  });

  it("should return an empty List if no courses are available", () => {
    const state = fromJS({
      courses: {},
    });

    const expectedResult = fromJS([]);

    const result = getAllCourses(state);

    expect(result).toEqual(expectedResult);
  });
});
