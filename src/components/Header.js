import React from "react";
import "../stylesheets/Header.css";
import CurrentDay from "./CurrentDay";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="curDay">
        <h4>
          <CurrentDay />
        </h4>
      </div>
    </div>
  );
};

export default Header;
