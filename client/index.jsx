import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Main from "./components/Main";
import "../public/stylesheets/index.css";

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("app")
);
