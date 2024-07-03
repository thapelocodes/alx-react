import { Map } from "immutable";
import rootReducer from "./rootReducer";

describe("Initial State of Root Reducer", () => {
  it("should have the correct initial state structure", () => {
    const initialState = rootReducer(undefined, { type: "@@INIT" });

    expect(initialState).toEqual({
      courses: Map({}),
      notifications: Map({}),
      ui: Map({}),
    });
  });
});
