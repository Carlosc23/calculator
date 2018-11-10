import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CalcBody from './calcBody';
import Header from './Header';
class App extends Component {
  render() {
    return (
      <div className="App">
      <div><Header/></div>
        <CalcBody/>
      </div>
    );
  }
}

export default App;
