import React, { Component } from 'react';
import logo from '../../img/svg/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          From Components
        </p>
        <i className="fa fa-close"></i>
      </div>
    );
  }
}

export default App;
