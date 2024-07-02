import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import uiReducer from "./reducers/uiReducer";

const store = createStore(uiReducer);
const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
