import React from "react";
import "../styles/Logo.scss";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      Intercel
    </Link>
  );
};

export default Logo;
