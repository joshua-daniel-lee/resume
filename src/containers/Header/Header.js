import React, { Component } from "react";
import "./header.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import Logo from "../../assets/Logo.png";

function Header(props) {
  return (
    <div className="header">
      <AppBar position="static">
        <Toolbar>
          <Avatar alt="Logo" src={Logo} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
