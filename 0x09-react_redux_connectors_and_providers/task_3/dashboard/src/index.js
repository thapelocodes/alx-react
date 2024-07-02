import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App";
import { applyMiddleware, createStore, compose } from "redux";
import { Provider } from "react-redux";
import uiReducer from "./reducers/uiReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(uiReducer, composeEnhancers(applyMiddleware(thunk)));
const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
