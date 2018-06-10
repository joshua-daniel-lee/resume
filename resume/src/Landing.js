import React, { Component } from "react";
import Header from "./containers/Header.js";
import Video from "./containers/Video.js";
import About from "./containers/About.js";
import Stack from "./containers/Stack.js";
import Inspiration from "./containers/Inspiration.js";
import Projects from "./containers/Projects.js";
import Contact from "./containers/Contact.js";
import Footer from "./containers/Footer.js";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Video />
        <About />
        <Stack />
        <Inspiration />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
