import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  const handleSubmit = e => {
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
        <input htmlFor="submit" type="submit" value="Sign up" />
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </React.Fragment>
  );
};

export default RegisterForm;
