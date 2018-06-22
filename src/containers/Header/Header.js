import React, { Component } from "react";
import "./header.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function Header(props) {
  return (
    <div className="header">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="secondary">
            JL
          </Typography>
          <Tabs color="secondary" color="secondary">
            <Tab label="The Gist" />
            <Tab label="Stack" />
            <Tab label="Contact" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
