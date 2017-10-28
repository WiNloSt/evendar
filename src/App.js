import React, { Component } from 'react'
import { Route } from 'react-router'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom'
import 'material-design-icons/iconfont/material-icons.css'

import './App.css'
import Debug from './Debug'
import Home from './containers/Home'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Navigation from './components/BottomNavigation'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/debug" component={Debug} />
            </Switch>
            <Navigation
              routes={[
                { path: '/', name: 'Home', icon: 'home' },
                { path: '/debug', name: 'Event Cards', icon: 'event' }
              ]}
            />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

export default App
