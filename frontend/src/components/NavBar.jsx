import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";

const NavBar = () => {
  return (
    <div className="navbar">
      <div><Logo /></div>
      <div>
        <Link to="/" className="navbar__links">
          Home
        </Link>
      </div>
      <div>
        <Link to="/login" className="navbar__links">
          Login
        </Link>
        <Link to="/register" className="navbar__links">
          Register
        </Link>
      </div>
      <div><SocialIcons /></div>
    </div>
  );
};

export default NavBar;
