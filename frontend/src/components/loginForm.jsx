import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import Input from "./formInput";
import Message from "./message";
import auth from "../services/authService";

const LoginForm = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const doSubmit = async () => {
    try {
      await auth.login(email, password);
      const { state } = props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (e) {
      if (e.response && e.response.status === 400) {
        console.log(e);
      }
    }
  };

  const handleSubmit = event => {
    // validation first

    event.preventDefault();
    doSubmit();
  };

  console.log(auth.getCurrentUser());
  if (auth.getCurrentUser()) return <Redirect to="/" />;
  return (
    <React.Fragment>
      <Message message="Sign into your account" />
      <form onSubmit={handleSubmit}>
        <Input
          htmlFor="email"
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <Input
          htmlFor="password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <Input htmlFor="submit" type="submit" value="Sign in" />
      </form>
      <p>
        Don't have an account? <Link to="/register">Sign up</Link>
        <span role="img" aria-label="smiley emoji">
          {" "}
          😊
        </span>
      </p>
    </React.Fragment>
  );
};

export default LoginForm;
