import React from 'react'
import FlatButton from 'material-ui/FlatButton';
import EventCardList from '../components/EventCardList'
import { getEvents, getAllTargetEvents } from '../utils/services'
import _ from 'lodash';


export default class Home extends React.Component {
  state = {
    events: [],
    recommendEvents: []
  }
  componentDidMount = () => {
    getAllTargetEvents()
    setTimeout(() => {
      global.FB.getLoginStatus(()=> {
        getAllTargetEvents().then((recommendEvents) => {
          console.log('[recommendEvents]', recommendEvents);
          const formatEvent = (e) => {
            return {
              name: e.name || '',
              id: e.id || '',
              url: e.picture.data.url || '',
              description: e.description || '',
              organizerImg: (e.cover || {}).source || '',
              organizerName: (e.parent_group || {}).name || '',
              going: e.rsvp_status
            }
          }
          getEvents().then((_events) => {
            const events = (
              _events.data.map(formatEvent)
            )
            this.setState({
              goingEvents: events.filter(e => e.going),
              interestedEvents: events.filter(e => !e.going),
              recommendEvents: _.map(recommendEvents, formatEvent)
            })
          })
        })
      })
    }, 2500)
  }
  render() {
    return (
      <div>
        <FlatButton label="Add สมาคมโปรแกรมเมอร์" primary={true} />
        <EventCardList events={this.state.recommendEvents} />
      </div>
    )
  }
}
