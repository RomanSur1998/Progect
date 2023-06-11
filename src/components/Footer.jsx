import React from "react";
import instIcon from "../assets/whatsapp.svg";
import whatsIcon from "../assets/social media.svg";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <h4>Random Adress</h4>
        <h4>Random Adress</h4>
        <div className="footerSocial">
          <img src={instIcon} alt="" />
          <img src={whatsIcon} alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
