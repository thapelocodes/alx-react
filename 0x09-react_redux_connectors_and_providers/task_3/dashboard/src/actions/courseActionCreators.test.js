import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";
import { selectCourse, unSelectCourse } from "./courseActionCreators";

describe("tests for aaction creators.", () => {
  it("verifies that calling `selectCourse(1)` returns { type: SELECT_COURSE, index: 1 }", () => {
    expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
  });

  it("verifies that calling `unSelectCourse(1)` returns { type: SELECT_COURSE. index: 1}", () => {
    expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
});
