import React from 'react'
import Avatar from 'material-ui/Avatar'

import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import { attend, interest, maybe } from '../utils/services'
import * as store from '../store'

const EventDetail = ({ history }) => (
  <Card>
    <CardMedia
      overlay={
        <CardTitle title={(store.get().event || {}).name} subtitle={`by ${(store.get().event || {}).organizerName}`} />
      }>
      <img src={(store.get().event || {}).organizerImg} alt="" />
    </CardMedia>
    <CardTitle title="รายละเอียด" subtitle="" />
    <CardText>
      {(store.get().event || {}).description}
      <div>
        <h3>Attendees</h3>
        <Avatar src="http://www.material-ui.com/images/uxceo-128.jpg" />
      </div>
      <div>
        <h3>Maybe</h3>
        <Avatar src="http://www.material-ui.com/images/uxceo-128.jpg" />
      </div>
      <div>
        <h3>Interested</h3>
        <Avatar src="http://www.material-ui.com/images/uxceo-128.jpg" />
      </div>
    </CardText>
    <CardActions style={{ textAlign: 'right' }}>
      <FlatButton
        label="Attend"
        onClick={() => {
          attend(store.get().event.id)
        }}
      />
      <FlatButton
        label="Maybe"
        onClick={() => {
          maybe(store.get().event.id)
        }}
      />
      <FlatButton
        label="Interest"
        onClick={() => {
          interest(store.get().event.id)
        }}
      />
      <FlatButton
        label="Cancel"
        onClick={() => {
          history.goBack()
        }}
      />
    </CardActions>
  </Card>
)

export default EventDetail
