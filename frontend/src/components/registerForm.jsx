import React, { useState } from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import validate from "../services/validationService";
import { register } from "../services/userService";
import auth from "../services/authService";
import Message from "./Message";
import Input from "./FormInput";
import ValidationError from "./ValidationError";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const schema = {
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(6)
      .label("Password")
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = e => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const doSubmit = async () => {
    try {
      const response = await register(email, username, password);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        setErrors({ main: ex.response.data });
      }
    }
  };

  const handleSubmit = e => {
    setErrors({});
    e.preventDefault();

    const errors = validate(
      {
        email,
        username,
        password
      },
      schema
    );

    setErrors(errors || {});

    if (errors) return;

    doSubmit();
  };

  return (
    <React.Fragment>
      <Message message="Sign up! 😄" />
      <form onSubmit={handleSubmit}>
        <ValidationError error={errors.main} />
        <label htmlFor="email">Email: </label>
        <br />
        <Input
          htmlFor="email"
          type="text"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <ValidationError error={errors.email} />
        <label htmlFor="username">Username: </label>
        <br />
        <Input
          htmlFor="username"
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <br />
        <ValidationError error={errors.username} />
        <label htmlFor="password">Password: </label>
        <br />
        <Input
          htmlFor="password"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <ValidationError error={errors.password} />
        <input htmlFor="submit" type="submit" value="Sign up" />
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </React.Fragment>
  );
};

export default RegisterForm;
