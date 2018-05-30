import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, BrowserRouter } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import { logout } from "../reducers";

const Main = props => (
  <BrowserRouter>
    <div id="body">
      <h1>Boilerplate App</h1>
      <p>boilerplate for full stack javascript web applications</p>
      <nav>
        {!props.user.email && (
          <Link to="/login">
            <button type="button">Log in</button>
          </Link>
        )}
        {!props.user.email && (
          <Link to="/signup">
            <button type="button">Sign up</button>
          </Link>
        )}
        {props.user.email && (
          <button type="button" onClick={props.logout}>
            Log out
          </button>
        )}
      </nav>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
    </div>
  </BrowserRouter>
);

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
