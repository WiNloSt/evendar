import React from 'react';
import { Link } from 'react-router-dom'
import EventCard from './EventCard'
import * as store from '../store'


export default class EventCardList extends React.Component {

  handleClick = (event) => {
    store.set({event})
  }
  render() {
    const events = [{
      name: "Barcamp Bangkhen 2016 (BCBK7)",
      id: "839514352851399",
      description: "THIS IS DESCRIPTION",
      url: "https://scontent.xx.fbcdn.net/v/t1.0-0/p50x50/14925508_1323392351016531_1566373749522983983_n.jpg?oh=23c6406032e69c226a2d575433e11686&oe=5A6DBF89",
      organizerImg: 'https://scontent.fbkk2-3.fna.fbcdn.net/v/t31.0-8/21640777_10155526785212597_3802686456531762674_o.jpg?oh=42c2b8bdded68612cea212034f2acdaf&oe=5AA9B321',
      organizerName: 'CPE & SKE KU'
      }]
    store.set({events})
    return (
      <div className="EventCardList">{
        events.map(event =>
          <Link to={`/events/${event.id}`} onClick={this.handleClick(event)}>
            <EventCard name={event.name} imgUrl={event.url} key={event.id} />
          </Link>
        )
      }
      </div>
    )
  }
}
