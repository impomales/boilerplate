import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../reducers";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state);
  }

  render() {
    return (
      <div>
        <h2>Sign up</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="text"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: loginInfo => {
      dispatch(login(loginInfo, ownProps.history));
    }
  };
};

export default connect(null, mapDispatchToProps)(Login);
