import React, { Component } from 'react'
import './App.css';

import StartTrace from './components/StartTrace';
import JoinTrace from './components/JoinTrace';
import BlockTracerHeader from './components/BlockTracerHeader';
import Home from './components/Home';
import Dashboard from './components/Dashboard'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    // No need to have constructor if it is not doing anything
    // This App.js component can be a functional component instead
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <BlockTracerHeader />
          <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/start' component={StartTrace}/>
          <Route path='/join' component={JoinTrace} />
          <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
