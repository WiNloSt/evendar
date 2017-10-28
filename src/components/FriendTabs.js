import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import FriendCardList from './FriendCardList'
import { getEvents } from '../utils/services'

export default class FriendTabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'a',
      goingEvents: [],
      interestedEvents: []
    }
  }

  handleChange = value => {
    this.setState({
      value: value
    })
  }

  componentDidMount() {
    global.FB.getLoginStatus(()=> {
      getEvents().then((_events) => {
        const events = (
          _events.data.map((e) => {
            return {
              name: e.name,
              id: e.id,
              imgUrl: e.picture.data.url,
              going: e.rsvp_status
            }
          })
        )
        this.setState({
          goingEvents: events.filter(e => e.going),
          interestedEvents: events.filter(e => !e.going)
        })
      })
    })
  }

  render() {
    return (
      <Tabs value={this.state.value} onChange={this.handleChange}>
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
