import React from 'react'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
};

const EventCard = ({ id, title, organizerImg, organizerName }) => (
  <div style={styles.root}>
    <GridList
      cols={1}
      cellHeight={180}

    >
    <Link to=`/event/${id}`>
      <GridTile
        key="ABC"
        title="DevC: First Meetup and Hackathon"
        subtitle={<span>by <b>"Facebook Developer Circle"</b></span>}
        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        cols={1}
      >
        <img src="https://scontent.fbkk2-3.fna.fbcdn.net/v/t31.0-8/21640777_10155526785212597_3802686456531762674_o.jpg?oh=42c2b8bdded68612cea212034f2acdaf&oe=5AA9B321" />
      </GridTile>
    </GridList>
  </div>
);

export default EventCard
