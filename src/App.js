import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Debug from './Debug'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/debug" component={Debug}/>
      </BrowserRouter>
    );
  }
}

export default App;
