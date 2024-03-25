import React, { Component } from 'react';
import './App.css';


import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
// import Navbar from "./components/Navbar";
import Projects from "./components/Projects";


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar/> */}
        <About/>
        <Projects/>
        <Resume/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
