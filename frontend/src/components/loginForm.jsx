import React, { Component } from "react";
import Input from "./formInput";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(e) {
    this.setState({ ...this.state, email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ ...this.state, password: e.target.value });
  }

  handleSubmit(e) {
    alert(this.state.email + " " + this.state.password);
    // do auth stuff...
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          type={"text"}
          name={"email"}
          placeholder={"email"}
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <Input
          type={"password"}
          name={"password"}
          placeholder={"Password"}
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <input type="submit" value="Log In" />
      </form>
    );
  }
}

export default LoginForm;
