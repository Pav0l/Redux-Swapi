import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  // applyMiddleware goes here
  // compose() is used to apply several store enhancers in a row into createStore,
  // because createStore takes only 3 arguments.
  compose(applyMiddleware(thunk, logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
