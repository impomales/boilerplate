import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, BrowserRouter } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import store from "../store";
import { logout } from "../reducers";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  render() {
    return (
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
            <button type="button" onClick={this.props.logout}>
              Log out
            </button>
          </nav>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (/*state, ownProps*/) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
