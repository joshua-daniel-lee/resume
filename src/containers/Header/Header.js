import React, { Component } from "react";
import "./header.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

class Header extends Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <div className="header">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="secondary">
              logo
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
