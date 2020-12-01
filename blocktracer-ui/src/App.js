import React, { Component } from 'react'
import './App.css';
import { blockTracerContract, account0 } from './config'
import StartTrace from './components/StartTrace';
import JoinTrace from './components/JoinTrace';
import BlockTracerHeader from './components/BlockTracerHeader';
import Home from './components/Home';
import Sidebar from './components/Sidebar';

class App extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="App">
        <BlockTracerHeader />
        <div className="flexbox-container">
          <Home />
        </div>
      </div>
    )
  }
}

export default App
