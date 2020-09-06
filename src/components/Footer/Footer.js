import React from "react";
import "./Footer.styles.css";

const Footer = () => {
  return (
    <div id='footer'>
      <div className="py-2 text-center footer-style">© SAMIR SINGH &nbsp; {new Date().getFullYear()}</div>
    </div>
  );
};

export default Footer;