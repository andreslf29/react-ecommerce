import React from "react";
import "../styles/Navbar.scss";
import "./CartWidget"
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li className="link-wrapper">
          <Link to="/" className="link hover-blue">
            Inicio
          </Link>
        </li>
        <li className="link-wrapper">
          <Link to="/categoria/xiaomi" className="link hover-blue">
            Xiaomi
          </Link>
        </li>
        <li className="link-wrapper">
          <Link to="/categoria/realme" className="link hover-blue">
            Realme
          </Link>
        </li>
        <li className="link-wrapper">
          <Link to="/categoria/samsung" className="link hover-blue">
            Samsung
          </Link>
        </li>
        <li className="link-wrapper">
          <Link to="/categoria/apple" className="link hover-blue">
            Apple
          </Link>
        </li>
      </ul>
      <CartWidget />
    </nav>    
  );
};

export default Navbar;
