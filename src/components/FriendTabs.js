import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import FriendCardList from './FriendCardList'
import { getEvents, getAllTargetEvents } from '../utils/services'
import _ from 'lodash';

export default class FriendTabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'a',
      goingEvents: [],
      interestedEvents: [],
      recommendEvents: [],
    }
  }

  handleChange = value => {
    this.setState({
      value: value
    })
  }

  componentDidMount() {
    setTimeout(() => {
      global.FB.getLoginStatus(()=> {
        getAllTargetEvents().then((recommendEvents) => {
          console.log('[recommendEvents]', recommendEvents);
          const formatEvent = (e) => {
            return {
              name: e.name,
              id: e.id,
              imgUrl: e.picture.data.url,
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
      <Tabs value={this.state.value} onChange={this.handleChange}>
        <Tab label="Recommend" value="r">
          <div>
            <FriendCardList friendList={this.state.recommendEvents} />
          </div>
        </Tab>
        <Tab label="Attended" value="a">
          <div>
            <FriendCardList friendList={this.state.goingEvents} />
          </div>
        </Tab>
        <Tab label="Interested" value="i">
          <div>
            <FriendCardList friendList={this.state.interestedEvents} />
          </div>
        </Tab>
      </Tabs>
    )
  }
}
