import React from 'react'

export default class LogoutButton extends React.Component {
  constructor(props) {
    super(props)
    this.onLogoutHandle = this.onLogoutHandle.bind(this)
  }

  onLogoutHandle() {
    this.props.logoutHandle(false)
  }

  render() {
    return (
      <button onClick={this.onLogoutHandle}>
        Logout
      </button>
    )
  }
}
