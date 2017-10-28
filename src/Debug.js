import React, { Component } from 'react'
import LoginPage from './containers/LoginPage'
import FriendTabs from './components/FriendTabs'

export default class Debug extends Component{
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
    this.onLoggedIn = this.onLoggedIn.bind(this)
  }

  onLoggedIn(loggedIn) {
    this.setState({
      isLoggedIn: loggedIn
    })
  }

  render () {
  return (
    <div>
      <LoginPage
        isLoggedIn={this.state.isLoggedIn}
        onLoggedIn={this.onLoggedIn}
      />
        <h1>THIS IS DEBUG</h1>
        <FriendTabs />
    </div>
    )
  }
}
