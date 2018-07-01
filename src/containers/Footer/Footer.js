import React from "react";
import "./footer.css";
import Logo from "../../assets/Logo.png";

function Footer(props) {
  return (
    <div className="footer">
      <img className="footerLogo" src={Logo} alt="Logo" />
    </div>
  );
}

export default Footer;
