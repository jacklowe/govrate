import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import validate from "../services/validationService";
import { Link } from "react-router-dom";
import Input from "./FormInput";
import Message from "./Message";
import auth from "../services/authService";
import ValidationError from "./ValidationError";

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
    <div className="LoginForm__container">
      <Message message="Sign into your account" />
      <form className="Form" onSubmit={handleSubmit}>
        <ValidationError error={errors.main} />
        <input
          className="Form__text-input"
          htmlFor="email"
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <ValidationError error={errors.email} />
        <input
          className="Form__password-input"
          htmlFor="password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <ValidationError error={errors.password} />
        <input
          className="Form__button-input Button"
          htmlFor="submit"
          type="submit"
          value="Sign in"
        />
      </form>
      <p>
        Don't have an account? <Link to="/register">Sign up</Link>
        <span role="img" aria-label="smiley emoji">
          {" "}
          😊
        </span>
      </p>
    </div>
  );
};

export default LoginForm;
