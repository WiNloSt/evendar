import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
};

const EventCard = ({ id, title, organizerImg, organizerName, description }) => (
  <Card>
  <CardMedia
    overlay={<CardTitle title={title} subtitle={`by ${organizerName}`} />}
  >
    <img src={organizerImg} alt="" />
  </CardMedia>
  <CardTitle title="รายละเอียด" subtitle="" />
  <CardText>
  {description}
  </CardText>
  <CardActions style={{textAlign: 'right'}}>
    <FlatButton label="Go" />
    <FlatButton label="Interest" />
    <FlatButton label="Cancel" />
  </CardActions>
</Card>
);

export default EventCard
