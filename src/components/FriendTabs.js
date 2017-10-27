import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FriendCardList from './FriendCardList'
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class FriendTabs extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
}

handleChange = (value) => {
    this.setState({
      value: value,
    });
};

  render() {
    let mockImg = 'https://scontent.fbkk2-3.fna.fbcdn.net/v/t31.0-8/22135364_10212726556412139_963748036038381781_o.jpg?oh=5afd41467d4eae7f4d7a9289c5820d8a&oe=5A786424'
    let goingList = [{
      id:1,
      imgUrl:mockImg,
      name:'nut nut'
    }]
    let interestedList = [
      {
        id:1,
        imgUrl:mockImg,
        name:'nut nut'
      },
      {
        id:2,
        imgUrl:mockImg,
        name:'nut nut'
      }
    ]
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Attended" value="a">
          <div>
            <FriendCardList friendList={goingList}></FriendCardList>
          </div>
        </Tab>
        <Tab label="Interested" value="b">
          <div>
            <FriendCardList friendList={interestedList} ></FriendCardList>
          </div>
        </Tab>
      </Tabs>
    );
  }
}