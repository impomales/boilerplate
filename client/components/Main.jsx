import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, BrowserRouter } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import { logout, fetchUser } from "../reducers";
import store from "../store";

class Main extends Component {
  componentDidMount() {
    store.dispatch(fetchUser());
  }

  render() {
    return (
      <BrowserRouter>
        <div id="body">
          <h1>Boilerplate App</h1>
          <p>boilerplate for full stack javascript web applications</p>
          <nav>
            {!this.props.user.email && (
              <Link to="/login">
                <button type="button">Log in</button>
              </Link>
            )}
            {!this.props.user.email && (
              <Link to="/signup">
                <button type="button">Sign up</button>
              </Link>
            )}
            {!this.props.user.email && (
              <a href="/auth/google">
                <button type="button">Log in with Google</button>
              </a>
            )}
            {this.props.user.email && (
              <button type="button" onClick={this.props.logout}>
                Log out
              </button>
            )}
          </nav>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

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
