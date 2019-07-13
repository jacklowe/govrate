import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import validate from "../services/validationService";
import { Link } from "react-router-dom";
import Input from "./formInput";
import Message from "./message";
import auth from "../services/authService";
import ValidationError from "./validationError";

const LoginForm = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const schema = {
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Password")
  };

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
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        setErrors({ main: ex.response.data });
      }
    }
  };

  const handleSubmit = e => {
    setErrors({});
    e.preventDefault();

    const errors = validate({ email, password }, schema);

    setErrors(errors || {});
    if (errors) return;

    doSubmit();
  };

  if (auth.getCurrentUser()) return <Redirect to="/" />;
  return (
    <React.Fragment>
      <Message message="Sign into your account" />
      <form onSubmit={handleSubmit}>
        <ValidationError error={errors.main} />
        <Input
          htmlFor="email"
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <ValidationError error={errors.email} />
        <Input
          htmlFor="password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <ValidationError error={errors.password} />
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
