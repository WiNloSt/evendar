import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import styled from 'react-emotion'
import { get, set } from '../store'

const colorPalette = ['#F44336', '#9C27B0', '#3F51B5', '#03A9F4', '#009688', '#8BC34A', '#FF9800', '#795548', '#607D8B']

const generateColor = name => {
  let sum = 0
  for (let char of name) {
    sum += char.charCodeAt(0)
  }

  const index = sum % colorPalette.length

  return colorPalette[index]
}

BigCalendar.momentLocalizer(moment)

class Calendar extends React.Component {
  state = {
    data: []
  }
  componentDidMount() {
    const { events = [] } = get()

    const data = events.map(event => ({
      ...event,
      start: new Date(event.start_time),
      end: new Date(event.end_time || event.start_time),
      title: event.name
    }))

    console.log(events)
    console.log(data)

    this.setState({ data })
  }

  render() {
    return (
      <FullHeight>
        <BigCalendar
          events={this.state.data}
          eventPropGetter={props => {
            return { style: { background: generateColor(props.organizerName) } }
          }}
          onSelectEvent={event => {
            set({ event })
            this.props.history.push(`/events/${event.id}`)
          }}
        />
      </FullHeight>
    )
  }
}

export default Calendar

const FullHeight = styled.div`
  height: 100%;

  .rbc-event.rbc-selected {
    filter: saturate(50%);
    background: inherit;
  }
`
