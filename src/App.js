import React, { Component } from 'react'
import nic from './blueplaid.jpg'
import './App.css';
import Navigation from './Navigation';


class App extends Component {

  render() {
    return (
      <div className="App">
          <h1>Hi, my name is Nic!</h1>
          <p>I am a software engineer who loves to build apps!</p>
          <Navigation />
          <img className="nic" alt="Nic is wearing a blue plaid shirt and squinting." src={nic} ></img>
          <div className="about">
 
          </div>
      </div>

    );
  }
}

export default App;
