import React, { Component } from 'react'
import './App.css';
import { blockTracerContract, account0 } from './config'
import StartTrace from './components/StartTrace';
import JoinTrace from './components/JoinTrace';
import BlockTracerHeader from './components/BlockTracerHeader';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    
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
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
