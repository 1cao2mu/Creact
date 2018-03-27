import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from "antd-mobile";

class App extends Component {

  onClick() {
    alert("onclick");

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button type="primary" onClick={() => this.onClick()} > 捏额</Button>
      </div>
    );
  }
}

export default App;
