import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  render() {
    return <h1>log in form</h1>;
  }
}
