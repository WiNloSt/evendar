import React from 'react'

export default class LoginButton extends React.Component {
  constructor(props) {
    super(props)
    this.onLoginHandle = this.onLoginHandle.bind(this)
  }

  onLoginHandle() {
    this.props.loginHandle()
  }

  render() {
    return (
      <button onClick={this.onLoginHandle}>
        Login
      </button>
    )
  }
}
