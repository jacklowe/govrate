import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../services/userService";
import auth from "../services/authService";
import Message from "./message";
import Input from "./formInput";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      console.log(ex);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    doSubmit();
    alert(`${username} ${email} ${password}`);
  };

  return (
    <React.Fragment>
      <Message message="Sign up! 😄" />
      <form onSubmit={handleSubmit}>
        <Input
          htmlFor="username"
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <br />
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
        <input htmlFor="submit" type="submit" value="Sign up" />
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </React.Fragment>
  );
};

// redux notes
// need user...
export default RegisterForm;
