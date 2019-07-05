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
    this.state = { data: {} };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;

    this.setState({ data });
  }

  handleSubmit(e) {
    alert(this.state.data.email + this.state.data.password);
    // do auth stuff...
    e.preventDefault();
  }

  render() {
    const { data } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="password">
          <Input
            type={"text"}
            name={"email"}
            placeholder={"email"}
            value={data["email"]}
            onChange={this.handleChange}
          />
          <Input
            type={"password"}
            name={"password"}
            placeholder={"Password"}
            value={data["password"]}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Log In" />
      </form>
    );
  }
}

export default LoginForm;
