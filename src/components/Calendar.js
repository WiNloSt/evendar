import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import styled from 'react-emotion'

BigCalendar.momentLocalizer(moment)

const Calendar = () => (
  <FullHeight>
    <BigCalendar events={[]} startAccessor="startDate" endAccessor="endDate" />
  </FullHeight>
)

export default Calendar

const FullHeight = styled.div`height: 100%;`
