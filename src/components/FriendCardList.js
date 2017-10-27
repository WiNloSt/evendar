import React from 'react';
import FriendCard from './FriendCard'


export default class FriendCardList extends React.Component {
  render() {
    const friendList = this.props.friendList
    return (
      <div>
        {
          friendList.map((friendInfo) =>
            <FriendCard friendInfo={friendInfo} key={friendInfo.id}/>
          )
        }
    </div>
    )
  }
}