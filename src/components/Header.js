import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <a href="/">
          <img className="logo" src={LOGO_URL}></img>
        </a>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
