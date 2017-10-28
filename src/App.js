import React, { Component } from 'react'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Debug from './Debug'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div>
            <Route exact path="/debug" component={Debug} />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

export default App
