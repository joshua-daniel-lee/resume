import React from "react";
import "./about.css";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/FitnessCenter";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import Divider from "@material-ui/core/Divider";

function About(props) {
  return (
    <div className="about">
      <div className="aboutContentOne">
        <div className="aboutHeadline">
          <Typography
            color="primary"
            variant="display2"
            align="center"
            gutterBottom
          >
            THE GIST
          </Typography>
        </div>
      </div>
      <div className="aboutContentTwo" />
      <div className="aboutContentTwo" />
      <Paper className="aboutContainerOne" elevation={8} />
      <Paper className="aboutContainerTwo" elevation={8} />
    </div>
  );
}

export default About;
