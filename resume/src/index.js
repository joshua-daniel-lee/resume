import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Landing from "./Landing";
import registerServiceWorker from "./registerServiceWorker";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] },
    secondary: { main: "#11cb5f" }
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <div>
      <Landing />
    </div>
  </MuiThemeProvider>,

  document.getElementById("root")
);
registerServiceWorker();
