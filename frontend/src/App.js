import React, { Component } from 'react';
import './App.css';
import ControlBar from './components/ControlBar';
import ToolCard from './components/ToolCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tools: [{
        title : 'Notion',
        link  : 'https://www.notion.so',
        description : 'Write, plan, collaborate, and get organized. Notion is all you need — in one tool.',
        tags : ['organization', 'plan', 'collaboration', 'writing', 'calendar']
      }]
    }
  }
  
  render() {
    return (
      <div className="App container">
        <h1>VUTTR</h1>
        <h2>Very Useful Tools to Remember</h2>
        <ControlBar />
        {
          this.state.tools.map(tool =><ToolCard {...tool} />)
        }
      </div>
    );
  }
}

export default App;
