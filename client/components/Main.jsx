import React from "react";
import { connect } from "react-redux";
import { Link, Route, BrowserRouter } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";

const Main = () => (
  <BrowserRouter>
    <div id="body">
      <h1>Boilerplate App</h1>
      <p>boilerplate for full stack javascript web applications</p>
      <nav>
        <Link to="/login">
          <button type="button">Log in</button>
        </Link>
        <Link to="/signup">
          <button type="button">Sign up</button>
        </Link>
      </nav>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
    </div>
  </BrowserRouter>
);

const mapStateToProps = (state /*, ownProps*/) => {
  return {};
};

const mapDispatchToProps = (state /*, ownProps*/) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
