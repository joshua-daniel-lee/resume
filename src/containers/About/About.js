import React from "react";
import "./about.css";
import Paper from "@material-ui/core/Paper";
import Logo from "../../assets/Logo.png";

function About(props) {
  return (
    <div className="about">
      <div className="aboutContentOne" />
      <div className="aboutContentTwo" />
      <div className="aboutContentTwo" />
      <Paper className="aboutContainerOne" elevation={8} />
      <Paper className="aboutContainerTwo" elevation={8} />
    </div>
  );
}

export default About;
