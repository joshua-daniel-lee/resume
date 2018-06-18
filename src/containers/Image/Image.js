import React, { Component } from "react";
import "./image.css";
import Button from "@material-ui/core/Button";

function Image(props) {
  return (
    <div className="image">
      <div className="background-image">
        <a href="/" className="logo">
          Joshua Lee
        </a>
        <div className="callout">
          <Button className="contactButton" variant="contained" color="primary">
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Image;
