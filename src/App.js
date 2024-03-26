import React, { Component } from 'react';
import './App.css';


import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
// import Projects from "./components/Projects";


class App extends Component {
  render() {
    return (
      <div className="App">
        <About/>
        {/* <Projects/> */}
        <Resume/>
        <Footer/>
      </div>
    );
  }
}

export default App;
