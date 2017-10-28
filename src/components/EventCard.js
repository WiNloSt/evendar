import React from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar'
import CardTitle from './CardTitle'

const EventCard = ({ name, imgUrl }) => (
  <Card>
    <CardHeader
      title={<CardTitle> {name} </CardTitle>}
      avatar={<Avatar src={imgUrl} size={70} />}
    />
  </Card>
)

export default EventCard
