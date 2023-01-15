import React from "react";
import { useState } from "react";
import axios from "axios";

const NewUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const postUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/register", {
        user_name: username,
        user_email: email,
        user_password: password,
      })
      .then((res) => {
        if (res.data.message) {
          setStatus(res.data.message);
        } else setStatus("Registration succesful");
      })
  };

  return (
    <div>
      <div className="register">
        <form>
          <h1>Register</h1>
          <div className="register__login">
            <label htmlFor="login" className="register__label">
              Login
            </label>
            <input
              className="register__input"
              type="text"
              name="username"
              placeholder="username"
              autoComplete="on"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div className="register__email">
            <label htmlFor="email" className="register__label">
              Email
            </label>
            <input
              className="register__input"
              type="email"
              name="email"
              placeholder="email"
              autoComplete="on"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="register__password">
            <label htmlFor="password" className="register__label">
              Password
            </label>
            <input
              className="register__input"
              type="password"
              name="password"
              placeholder="password"
              autoComplete="on"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button className="register__button" onClick={postUser}>
            Register
          </button>
        </form>
        <p>
          Jeśli posiadasz konto <a href="/login">Login</a>
        </p>
        <p>{status}</p>
      </div>
    </div>
  );
};

export default NewUser;
