import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route } from "react-router-dom";

import applicantReducers from "./store/reducers/applicantsReducers";
import App from "./container/App";
import styles from "./styles/main.scss";

const rootReducer = combineReducers({
  applicants: applicantReducers
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route
        path="/"
        render={({ location, history }) => {
          return <App history={history} location={location} />;
        }}
      />
    </Router>{" "}
  </Provider>,
  document.getElementById("container")
);
