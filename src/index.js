import App from "./js/components/App";
import styles from "./styles/main.scss";
import React from "react";
import ReactDOM from "react-dom";
import applicantReducers from "./js/components/reducers/applicantsReducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(applicantReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("container")
);
