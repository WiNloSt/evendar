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
      <div onClick={this.onButtonHandle} style={{ background: '#3b5998', color: '#FFFFFF', padding: '20px'}}>
        {this.props.children}
      </div>
    )
  }
}
