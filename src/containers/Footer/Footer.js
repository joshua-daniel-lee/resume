import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./footer.css";
import Logo from "../../assets/Logo.png";

function Footer(props) {
  return (
    <div className="footer">
      <Avatar className="footerLogo" alt="Logo" src={Logo} />
    </div>
  );
}

export default Footer;
