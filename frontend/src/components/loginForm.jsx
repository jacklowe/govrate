import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./formInput";
import Message from "./Message";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    alert(`${email} ${password}`);
    // do auth stuff
    event.preventDefault();
  };

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
        <Input
          htmlFor="password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Input htmlFor="submit" type="submit" value="Sign in" />
      </form>
      <p>
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    </React.Fragment>
  );
};

export default LoginForm;
