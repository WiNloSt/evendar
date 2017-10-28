import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import FriendCardList from './FriendCardList'
import { getEvents } from '../utils/services'

export default class FriendTabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'a',
      events: []
    }
  }

  handleChange = value => {
    this.setState({
      value: value
    })
  }

  componentDidMount() {
    global.FB.getLoginStatus(()=> {
      getEvents().then((events) => {
        this.setState({
          events: (
            events.data.map((e) => {
              return {
                name: e.name,
                id: e.id,
                imgUrl: e.picture.data.url
              }
            })
          )
        })
      })
    })
  }

  render() {
    // let mockImg = 'https://scontent.fbkk2-3.fna.fbcdn.net/v/t31.0-8/22135364_10212726556412139_963748036038381781_o.jpg?oh=5afd41467d4eae7f4d7a9289c5820d8a&oe=5A786424'
    // const attending = this.props.attending
    // const goingList = attending.filter(friend => friend.rsvp_status === 'attending')
    // const interestedList = attending.filter(friend => friend.rsvp_status === 'maybe')

    return (
      <Tabs value={this.state.value} onChange={this.handleChange}>
        <Tab label="Attended" value="a">
          <div>
            <FriendCardList friendList={this.state.events} />
          </div>
        </Tab>
      </Tabs>
    )
  }
}
