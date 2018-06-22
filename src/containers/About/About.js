import React, { Component } from "react";
import "./about.css";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import Divider from "@material-ui/core/Divider";

function About(props) {
  return (
    <div className="about">
      <div className="aboutContentOne">
        <div className="aboutHeadline">
          <Typography variant="display2" align="center" gutterBottom>
            THE GIST
          </Typography>
        </div>
      </div>
      <div className="aboutContentTwo">
        <List className="aboutData">
          <ListItem>
            <Avatar>
              <ImageIcon />
            </Avatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem>
          <li>
            <Divider inset />
          </li>
          <ListItem>
            <Avatar>
              <WorkIcon />
            </Avatar>
            <ListItemText primary="Work" secondary="Jan 7, 2014" />
          </ListItem>
          <Divider inset component="li" />
          <ListItem>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
            <ListItemText primary="Vacation" secondary="July 20, 2014" />
          </ListItem>
        </List>
      </div>
      <div className="aboutContentTwo" />
      <Paper className="aboutContainerOne" elevation={8} />
      <Paper className="aboutContainerTwo" elevation={8} />
    </div>
  );
}

export default About;
