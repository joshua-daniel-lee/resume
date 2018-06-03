import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="header">
        <Button variant="raised" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}

export default Header;
