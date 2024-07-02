import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import uiReducer from "./reducers/uiReducer";
import thunk from "redux-thunk";

const store = createStore(uiReducer, applyMiddleware(thunk));
const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
