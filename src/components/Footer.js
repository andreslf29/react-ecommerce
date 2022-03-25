import React from "react";
import "../styles/Footer.scss";
import Logo from "./Logo";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <>
      <footer className="row footer">
        <div className="col-md-6 col-12">
          <Logo>Intercel</Logo>
          <p>3203627498</p>
          <p>Calle 61 # 3 - 91</p>
          <p>Bucaramanga, Santander</p>
        </div>
        <div className="col-md-6 col-12 iconos">
          <Icon icon="mdi:facebook" />
          <Icon icon="mdi:instagram" />
          <Icon icon="mdi:whatsapp" />
        </div>
      </footer>
      <footer className="finalfooter">
        Developed by{" "}
        <a
          href="https://www.linkedin.com/in/andres-leonardo-florez-montagut/"
          target="_blank"
        >
          Andrés Montagut
        </a>
      </footer>
    </>
  );
};

export default Footer;
