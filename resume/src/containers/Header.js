import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="header">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="secondary">
              Joshua Daniel Lee
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
