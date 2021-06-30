import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <Link to="/">
        <div className="logo">
          <p>Where in the world?</p>
        </div>
      </Link>
      <div className="dark-switch">
        <i className="far fa-moon"></i>
        <p>Dark mode</p>
      </div>
    </header>
  );
}

export default Header;
