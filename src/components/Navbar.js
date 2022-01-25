import React from "react";
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li className="link-wrapper">
          <a href="/" className="link hover-blue">
            Inicio
          </a>
        </li>
        <li className="link-wrapper">
          <a href="/" className="link hover-blue">
            Xiaomi
          </a>
        </li>
        <li className="link-wrapper">
          <a href="/" className="link hover-blue">
            Realme
          </a>
        </li>
        <li className="link-wrapper">
          <a href="/" className="link hover-blue">
            Samsung
          </a>
        </li>
        <li className="link-wrapper">
          <a href="/" className="link hover-blue">
            Apple
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
