import React, { Component } from "react";
import "./about.css";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

function About(props) {
  return (
    <div className="about">
      <Paper className="aboutDataOne" elevation={8}>
        <Typography
          className="aboutTag"
          variant="headline"
          color="textSecondary"
        >
          About
        </Typography>
      </Paper>
      <Paper className="aboutDataTwo" elevation={8} />
    </div>
  );
}

export default About;
