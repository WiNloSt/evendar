import React from 'react';

import FriendTabs from './FriendTabs'
import Avatar from 'material-ui/Avatar'
import {Card,CardTitle, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class EventCard extends React.Component {
  render() {
    return (
      <div className="EventCard">
      <Card>
      <CardHeader
        title="Event name"
        avatar={ <Avatar src=""  size={100}/>}
      />
      <CardTitle title="Description"/>
      <CardText >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      <CardActions>
      <FlatButton label="View"/>
    </CardActions>
    </Card>
      </div>
    );
  }
}