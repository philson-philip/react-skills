import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import img1 from './assets/img/img1.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Learning</h1>
        </header>
        <p className="App-intro">
          React - A JavaScript Library for building the User Interfaces
        </p>
        <div>
          <img src={img1} className="Cover" alt="image"/>
        </div>
      </div>
    );
  }
}

export default App;
