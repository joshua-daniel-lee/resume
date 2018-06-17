import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";

class About extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="about">
        <Paper className="aboutDataOne" elevation={8} />
        <Paper className="aboutDataTwo" elevation={8} />
      </div>
    );
  }
}

export default About;
