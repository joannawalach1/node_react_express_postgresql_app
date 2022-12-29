import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";

const Layouts = (props) => {
  return (
    <div>
      <div className="header">
        <NavBar />
      </div>
      <div>
        <Banner />
      </div>
      <div className="main">{props.children}</div>
      <div className="footer">@Copyright 2022</div>
    </div>
  );
};

export default Layouts;
