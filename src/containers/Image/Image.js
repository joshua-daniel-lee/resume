import React from "react";
import Email from "../Email/Email";
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
          <Email />
          <Button className="contactButton" variant="contained" color="primary">
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Image;
