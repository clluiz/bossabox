import React, { Component } from 'react';
import ControlBar from './components/ControlBar';
import ToolCard from './components/ToolCard';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchInAllFields } from './app.actions';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.searchInAllFields();
  }

  render() {
    return (
      <div className="App container">
        <h1>VUTTR</h1>
        <h2>Very Useful Tools to Remember</h2>
        <ControlBar />
        {
          this.props.app.tools.map(tool =><ToolCard {...tool} />)
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({ app: state.app });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ searchInAllFields }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
