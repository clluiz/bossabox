import React, { Component } from 'react';
import ControlBar from './components/ControlBar';
import ToolCard from './components/ToolCard';

import { connect } from 'react-redux';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1>VUTTR</h1>
        <h2>Very Useful Tools to Remember</h2>
        <ControlBar />
        {
          this.props.app.tools.map((tool, index) => { return <ToolCard {...tool} key={index}  /> })
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({ app: state.app });

export default connect(
  mapStateToProps
)(App);
