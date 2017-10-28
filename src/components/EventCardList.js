import React from 'react';

import FriendTabs from './FriendTabs'
import EventCard from './EventCard'

export default class EventCardList extends React.Component {
  render() {
    const events = [{
      picture: {
        data: {
          url: "https://scontent.xx.fbcdn.net/v/t1.0-0/p50x50/14925508_1323392351016531_1566373749522983983_n.jpg?oh=23c6406032e69c226a2d575433e11686&oe=5A6DBF89"
        }
      },
      name: "Barcamp Bangkhen 2016 (BCBK7)",
      attending: {
        data: [
          {
            name: "Jiratchaya Sirilakeanun",
            id: "372151856547792",
            rsvp_status: "attending"
          },
          {
            name: "Tanabordee Inta",
            id: "134375736972170",
            rsvp_status: "attending"
          },
          {
            name: "Wanwipa Weerawatpruchya",
            id: "111169549289970",
            rsvp_status: "attending"
          }],
        paging: {
          cursors: {
            before: "QVFIUjc2bFRrcXlZAVkVtLVIwY3RaUDJXTkt2ZAFpjclI0eWZAPM1NUVGE0NGZA3SWhXZAXNMTFRXMjlzeDlQQmxrcERHVEpsdUxZAZA2tTTmVyT01ZAY2M3VjQwN19n",
            after: "QVFIUi1Ga1VYOFNGSWlKYVZAWazNVelBEaXZAzOGpzNUhmZAnAtUy1MODJkNjdzc1FYSnhtRVVYUzMzUTNnbWZANdkJuaTVtYXZA6N0phd0ZAwS1dRMUZAQN3YxOVB3"
          },
          next: "https://graph.facebook.com/v2.10/839514352851399/attending?access_token=EAACEdEose0cBAHQyNzkWK9WuZArbZCESUVrZBvuc7ujsLTMIxZBiR9TU1ZAxsGcij0ieFT9yzkrYJtJbLCqbJtJ7ZBZCnc2MYJ3KSVNxG51ZBQ7onvEEXrW4w8EtHiRIJY0VENXGY82mRdT0ci3qBHIqxwZCJY1Y73TcpmiMvcnGJdGHZCKEuXXRWR9z5yZAnHrhjd8yx2ajZClztwomDsogS7DR&pretty=0&limit=25&after=QVFIUi1Ga1VYOFNGSWlKYVZAWazNVelBEaXZAzOGpzNUhmZAnAtUy1MODJkNjdzc1FYSnhtRVVYUzMzUTNnbWZANdkJuaTVtYXZA6N0phd0ZAwS1dRMUZAQN3YxOVB3"
        }
      },
      id: "839514352851399"
      }]
    return (
      <div className="EventCardList">{
        events.map(event => 
          <EventCard event={event} key={event.id}/>
        )
      }
      </div>
    );
  }
}

// {/*<FriendTabs attending={event.attending.data} key={event.id} />*/}