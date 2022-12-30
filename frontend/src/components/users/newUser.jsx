import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const NewUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/users/")
      .then((res) => {
        console.log("Getting from", res.data);
        setUser(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const postUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/register/", {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log("Posting data", res);

      })
      .catch((error) => console.error(error));
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
      </div>
    </div>
  );
};

export { NewUser };
