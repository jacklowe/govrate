import React, { useState } from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import validate from "../services/validationService";
import { register } from "../services/userService";
import auth from "../services/authService";
import Message from "./Message";
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
    <div>
      <Message message="Sign up! 😄" />
      <form className="Form" onSubmit={handleSubmit}>
        <div className="Form__validation">
          <ValidationError error={errors.main} />
        </div>
        <div className="Form__group">
          <input
            className="Form__text-input"
            placeholder="Email"
            type="text"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          <ValidationError error={errors.email} />
        </div>
        <div className="Form__group">
          <input
            className="Form__text-input"
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
          <ValidationError error={errors.username} />
        </div>
        <div className="Form__group">
          <input
            className="Form__password-input"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <ValidationError error={errors.password} />
        </div>
        <input
          className="Form__button-input Button"
          htmlFor="submit"
          type="submit"
          value="Sign up"
        />
      </form>
      <p>
        Already have an account?{" "}
        <Link className="Link" to="/login">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
