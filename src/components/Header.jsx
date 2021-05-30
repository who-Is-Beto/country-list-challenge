import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <div className="logo">
        <p>Where in the world?</p>
      </div>
      <div className="dark-switch">
        <i className="far fa-moon"></i>
        <p>Dark mode</p>
      </div>
    </header>
  );
}

export default Header;
