import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App";
import { createStore } from "redux";
import uiReducer from "./reducers/uiReducer";
import { Provider } from "react-redux";

const store = createStore(uiReducer);
const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);