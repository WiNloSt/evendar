import React from 'react'
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import * as store from '../store'

const EventDetail = ({ match, id, title, organizerImg, organizerName, description }) => (
  <Card>
  <CardMedia
    overlay={<CardTitle title={store.get().event.name} subtitle={`by ${store.get().event.organizerName}`} />}
  >
    <img src={store.get().event.organizerImg} alt="" />
  </CardMedia>
  <CardTitle title="รายละเอียด" subtitle="" />
  <CardText>
    {store.get().event.description}
  </CardText>
  <CardActions style={{textAlign: 'right'}}>
    <FlatButton label="Go" />
    <FlatButton label="Interest" />
    <FlatButton label="Cancel" />
  </CardActions>
</Card>
);

export default EventDetail
