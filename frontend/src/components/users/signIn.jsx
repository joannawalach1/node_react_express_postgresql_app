import React, { useState } from "react";
import axios from "axios";

function SignIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const signUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/login/", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        setStatus(response.data.rows[0].username);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="login">
      <form>
        <h1>Login</h1>
        <div className="login__login">
          <label htmlFor="login" className="login__label">
            Login
          </label>
          <input
            className="login__input"
            type="text"
            name="login"
            placeholder="login"
            autoComplete="on"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div className="login__password">
          <label htmlFor="password" className="login__label">
            Password
          </label>
          <input
            className="login__input"
            type="password"
            name="password"
            placeholder="password"
            autoComplete="on"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button className="login__button" onClick={signUser}>
          Login
        </button>
        <p>
          Jeśli nie posiadasz konta <a href="/login">Register</a>
        </p>
      </form>
      <p>{status}</p>
    </div>
  );
}

export default SignIn;
