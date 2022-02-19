import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import "../styles/Header.scss";

const Header = () => {

  return (
    <>
      <header className="header">
        <Logo />
        <Navbar />
      </header>
    </>
  );
};

export default Header;
