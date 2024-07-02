import courseReducer from "./courseReducer";
import notificationReducer from "./notificationReducer";
import uiReducer from "./uiReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
});
