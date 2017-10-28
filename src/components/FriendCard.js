import React from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar'
import CardTitle from './CardTitle'

export default class FriendCard extends React.Component {
  render() {
    const friendInfo = this.props.friendInfo
    const imgSize = 70
    return (
      <Card>
        <CardHeader
          title= {<CardTitle> {friendInfo.name} </CardTitle> }
          avatar={ <Avatar src={friendInfo.imgUrl}  size={imgSize}/>}
        />
      </Card>
    );
  }
}
