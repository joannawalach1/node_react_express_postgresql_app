import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function SignIn() {
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const signUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/login", {
        name: name,
        password: password,
      })
      .then((response) => {
        if (response.data.message||null) {
          setStatus(response.data.message);
        } else {
          setStatus("login succesfull OK");
          setStatus(response.data[0].email);
          navigate('/dashboard');
        } 
      })
      .catch((error) => setStatus(error))
  }

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
            name="user_login"
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
            type="text"
            name="user_password"
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
        <p>{status}</p>
      </form>
    </div>
  );
}

export default SignIn;
