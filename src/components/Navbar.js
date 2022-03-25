import React from "react";
import "../styles/Navbar.scss";
import "./CartWidget";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { ClassNames } from "@emotion/react";

const Navbar = () => {
  return (
    <nav className="nav navbar navbar-expand-lg navbar-dark">
      <div className="">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
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
        </div>
      </div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
