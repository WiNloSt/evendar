import React from 'react';
import { Link } from 'react-router-dom'
import EventCard from './EventCard'
import * as store from '../store'


export default class EventCardList extends React.Component {

  handleClick = (event) => {
    store.set({event})
  }
  render() {
    return (
      <div className="EventCardList">{
        this.props.events.map(event =>
          <Link to={`/events/${event.id}`}
          key={event.id}
          onClick={this.handleClick(event)}>
            <EventCard name={event.name} imgUrl={event.url} key={event.id} />
          </Link>
        )
      }
      </div>
    )
  }
}
