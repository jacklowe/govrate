import React, { Component } from "react";
import Input from "./formInput";

// const LoginForm = () => {
//   return (
//     <form action="">
//       <label htmlFor="">
//         Name:
//         <input type="text" name="name" />
//       </label>
//       <input type="submit" value="submit" />
//     </form>
//   );
// };

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const user = { ...this.state.data };
    user[e.currentTarget.name] = e.currentTarget.value;

    this.setState({ user });
  }

  handleSubmit(e) {
    alert(this.state.user.email + this.state.user.password);
    // do auth stuff...
    e.preventDefault();
  }

  render() {
    const { user } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="password">
          <Input
            type={"text"}
            name={"email"}
            placeholder={"email"}
            value={user["email"]}
            onChange={this.handleChange}
          />
          <Input
            type={"password"}
            name={"password"}
            placeholder={"Password"}
            value={user["password"]}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Log In" />
      </form>
    );
  }
}

export default LoginForm;
