import React, { Component } from 'react'
import EventCardList from './components/EventCardList'

export default class Debug extends Component{
  render () {
  return (
    <div>
        <h1>THIS IS DEBUG</h1>
      <EventCardList />
    </div>
    )
  }
}
