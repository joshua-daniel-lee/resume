import React, { Component } from "react";
import "./stack.css";
import Paper from "@material-ui/core/Paper";

function Stack(props) {
  return (
    <div className="stack">
      <Paper className="stackDataOne" elevation={8} />
      <Paper className="stackDataTwo" elevation={8} />
    </div>
  );
}

export default Stack;
