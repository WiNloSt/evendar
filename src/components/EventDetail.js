import React from 'react'
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { attend, interest, maybe, cancel } from '../utils/services'
import * as store from '../store'

const EventDetail = () => (
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
    <FlatButton label="Attend" onClick={() => { attend(store.get().event.id) }} />
    <FlatButton label="Maybe" onClick={() => { maybe(store.get().event.id) }} />
    <FlatButton label="Interest" onClick={() => { interest(store.get().event.id) }} />
    <FlatButton label="Cancel" onClick={() => { cancel(store.get().event.id) }} />
  </CardActions>
</Card>
);

export default EventDetail
