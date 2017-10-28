import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import EventCardList from '../components/EventCardList'
import { getEvents, getAllTargetEvents } from '../utils/services'
import * as store from '../store'
import _ from 'lodash'

export default class Home extends React.Component {
  state = {
    events: [],
    recommendEvents: []
  }
  componentDidMount = () => {
    this.fetchData(1)
  }

  fetchData = id => {
    getAllTargetEvents(id)
    setTimeout(() => {
      global.FB.getLoginStatus(() => {
        getAllTargetEvents(id).then(recommendEvents => {
          console.log('[recommendEvents]', recommendEvents)
          const formatEvent = e => {
            return {
              name: e.name || '',
              id: e.id || '',
              url: e.picture.data.url || '',
              description: e.description || '',
              organizerImg: (e.cover || {}).source || '',
              organizerName: (e.parent_group || {}).name || '',
              going: e.rsvp_status,
              start_time: e.start_time,
              end_time: e.end_time
            }
          }
          getEvents().then(_events => {
            const events = _events.data.map(formatEvent)
            this.setState({
              goingEvents: events.filter(e => e.going),
              interestedEvents: events.filter(e => !e.going),
              recommendEvents: _.map(recommendEvents, formatEvent)
            })
            store.set({ events: this.state.recommendEvents })
          })
        })
      })
    }, 2500)
  }
  render() {
    return (
      <div>
        <FlatButton
          label="Add สมาคมโปรแกรมเมอร์"
          onClick={() => {
            this.fetchData(2)
          }}
          primary={true}
        />
        <FlatButton
          label="Add 42.195 K Club...เราจะไปมาราธอนด้วยกัน"
          onClick={() => {
            this.fetchData(3)
          }}
          primary={true}
        />
        <EventCardList events={this.state.recommendEvents} />
      </div>
    )
  }
}
