import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";
import { selectCourse, unSelectCourse } from "./courseActionCreators";

fetchMock.enableMocks();

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("tests for action creators.", () => {
  it("verifies that calling `selectCourse(1)` returns { type: SELECT_COURSE, index: 1 }", () => {
    expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
  });

  it("verifies that calling `unSelectCourse(1)` returns { type: SELECT_COURSE. index: 1}", () => {
    expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });

  it("verifies that calling `setCourses` returns { type: SET_COURSES, courses }", () => {
    const courses = [{ id: 1, name: "Course 1" }];
    expect(setCourses(courses)).toEqual({ type: SET_COURSES, courses });
  });

  describe("fetchCourses action", () => {
    beforeEach(() => {
      fetch.resetMocks();
    });

    it("creates SET_COURSES when fetching courses has been done", async () => {
      const store = mockStore({ courses: [] });
      const expectedCourses = [{ id: 1, name: "Course 1" }];
      fetch.mockResponseOnce(JSON.stringify(expectedCourses));

      const expectedActions = [{ type: SET_COURSES, courses: expectedCourses }];

      await store.dispatch(fetchCourses());
      expect(store.getActions()).toEqual(expectedActions);
    });

    it("throws an error when the fetch fails", async () => {
      fetch.mockReject(new Error("Internal Server Error"));

      await expect(fetchCourses()).rejects.toThrow("Failed to fetch courses");
    });
  });
});
