import React, { Component } from 'react';
import ControlBar from './components/ControlBar';
import ToolList from './components/ToolList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1>VUTTR</h1>
        <h2>Very Useful Tools to Remember</h2>
        <ControlBar />
        <ToolList />
      </div>
    );
  }
}

export default App;

