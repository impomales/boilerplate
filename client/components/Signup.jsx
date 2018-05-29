import React, { Component } from "react";
import axios from "axios";

export default class Signup extends Component {
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
    axios
      .post("/auth/signup", this.state)
      .then(res => res.data)
      .then(user => console.log(user))
      .catch(console.error);
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
          <button type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}
