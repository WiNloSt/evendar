import React from 'react'
import EventCardList from '../components/EventCardList'
import {getAllTargetEvents} from '../utils/services'

export default class Home extends React.Component {
  state = {
    events: []
  }
  componentDidMount = () => {
    getAllTargetEvents()
  }
  render() {
    console.log(this.state.events)
    return (
      <div>
        <EventCardList />
      </div>
    )
  }
}
