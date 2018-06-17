import React, { Component } from "react";
import Header from "./containers/Header/Header";
import Image from "./containers/Image/Image";
import About from "./containers/About/About";
import Stack from "./containers/Stack/Stack";
import Contact from "./containers/Contact/Contact";
import Footer from "./containers/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Image />
        <About />
        <Stack />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
