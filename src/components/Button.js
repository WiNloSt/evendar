import React from 'react'

export default class Button extends React.Component {
  constructor(props) {
    super(props)
    this.onButtonHandle = this.onButtonHandle.bind(this)
  }

  onButtonHandle() {
    this.props.buttonHandle()
  }

  render() {
    return (
      <button onClick={this.onButtonHandle}>
        {this.props.children}
      </button>
    )
  }
}
