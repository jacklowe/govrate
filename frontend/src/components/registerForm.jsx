import React, { useState } from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import { register } from "../services/userService";
import auth from "../services/authService";
import Message from "./message";
import Input from "./formInput";
import ValidationError from "./validationError";

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

  const validate = (data, schema) => {
    const options = { abortEarly: false };

    const { error } = Joi.validate(data, schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
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
        setErrors({ ...errors, main: ex.response.data });
      }
    }
  };

  const handleSubmit = e => {
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

    doSubmit();
  };

  return (
    <React.Fragment>
      <Message message="Sign up! 😄" />
      <form onSubmit={handleSubmit}>
        <ValidationError error={errors.main} />
        <label htmlFor="username">Username: </label>
        <br />
        <Input
          htmlFor="username"
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <ValidationError error={errors.username} />
        <br />
        <label htmlFor="email">Email: </label>
        <br />
        <Input
          htmlFor="email"
          type="text"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <ValidationError error={errors.email} />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <Input
          htmlFor="password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <ValidationError error={errors.password} />
        <br />
        <input htmlFor="submit" type="submit" value="Sign up" />
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </React.Fragment>
  );
};

export default RegisterForm;
