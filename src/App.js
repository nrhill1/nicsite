import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import nic from './blueplaid.jpg'
import './App.css';
import Navigation from './Navigation';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <h1>Hi, my name is Nic.</h1>
          <Navigation />
          <img className="nic" alt="Nic is wearing a blue plaid shirt and squinting." src={nic} ></img>
        </header>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>

    );
  }
}

export default App;
