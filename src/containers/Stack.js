import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";

class Stack extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="stack">
        <Paper className="stackDataOne" elevation={8} />
        <Paper className="stackDataTwo" elevation={8} />
      </div>
    );
  }
}

export default Stack;
