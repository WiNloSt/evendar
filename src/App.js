import React, { Component } from 'react'
import { Route } from 'react-router'
import { BrowserRouter, Switch } from 'react-router-dom'
import 'material-design-icons/iconfont/material-icons.css'

import './App.css'
import Debug from './Debug'
import Home from './containers/Home'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Navigation from './components/BottomNavigation'
import Calendar from './components/Calendar'
import EventDetail from './components/EventDetail'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/debug" component={Debug} />
              <Route path="/calendar" component={Calendar} />
              <Route exact path="/debug" component={Debug} />
              <Route exact path="/events/:id" component={EventDetail} />
            </Switch>
            <Navigation
              routes={[
                { path: '/', name: 'Home', icon: 'home' },
                { path: '/debug', name: 'Event Cards', icon: 'view_list' },
                { path: '/calendar', name: 'Calendar', icon: 'event' }
              ]}
            />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

export default App
