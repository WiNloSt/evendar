import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import styled from 'react-emotion'

const mockApiResponse = [
  {
    description: `เปิดให้ Register ตอนเที่ยงตรง วันที่ 23 ตุลาคม 2560 
https://www.eventpop.me/e/2489
Facebook Developer Circle: Bangkok กำลังจะจัดงาน Meetup Launch และ Hackathon ในวันที่ 27-28 ตุลาคม นี้นะคะ ตารางจะประมาณนี้
27 ตค. ช่วงเย็น — คืองาน Meetup lanuch ครั้งแรกของ Bangkok circle นะคะ มาพบปะกัน มี keynote จาก facebook และมี speakers ระดับเทพ ขออุบไว้ก่อนว่าเป็นใคร มากระทบไหล่เทพแบบตัวๆ กันเลย
หลัง meetup ก็ต่อ hackathon ยาวจน 28 ตค. เลย ค้างคืน มีที่อาบน้ำนะคะ
งานนี้ของแจกเพียบ จำนวนจำกัดด้วยจ้า เสื้อ แก้ว สติ๊กเกอร์รุ่นแรกของ Facebook Deceloper Circle เลย
สำหรับน้องๆ ที่กลัวการ hack ไม่ต้องห่วงนะคะ เรามี mentor คอยช่วยเหลือ และน้องจะได้รับประสบการณ์ที่ดีมากๆ กลับไปแน่นอน
จัดทีม hackathon ไว้นะคะ ชิงรางวัลสูงสุดจาก Facebook Global นะคะ $20000 หรือ 700,000 บาท งานนี้ Facebook ลงทุนมากกก มีรางวัลหลายประเภทด้วย ทั้งเดี่ยว และองค์กร ลองดูลิงค์ แล้วจัดทีมมานะคะ
นอกจากรางวัล global เราจะมีรางวัลพิเศษเฉพาะ circle เราด้วย บอกเลยไม่ธรรมดา
สำหรับคนที่ไม่ได้มา hack ก็มาพบปะ meetup กระทบไหล่คนดัง และมาเสพความรู้กันค่ะ ในช่วงเย็นวันศุกร์ 27 ตค. งานนี้ใหญ่มากจริงๆ`,
    end_time: '2017-10-28T17:00:00+0700',
    name: 'DevC: First Meetup and Hackathon',
    place: {
      name: 'Ananda Development',
      location: {
        city: 'Bangkok',
        country: 'Thailand',
        latitude: 13.720364452979,
        longitude: 100.55952429771,
        street: 'FYI Center, 11th Floor, 2525 Rama 4 road, Klongtoei',
        zip: '10110'
      },
      id: '274108073649'
    },
    start_time: '2017-10-27T18:00:00+0700',
    id: '148584322421822'
  },
  {
    name: 'test',
    start_time: '2017-10-25T18:00:00+0700',
    end_time: '2017-10-26T18:00:00+0700'
  }
]

const mockData = mockApiResponse.map(event => ({
  start: event.start_time,
  end: event.end_time,
  title: event.name
}))

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

const Calendar = () => (
  <FullHeight>
    <BigCalendar
      events={mockData}
      eventPropGetter={props => {
        return { style: { background: colorPalette[(Math.random() * colorPalette.length) | 0] } }
      }}
    />
  </FullHeight>
)

export default Calendar

const FullHeight = styled.div`
  height: 100%;

  .rbc-event.rbc-selected {
    filter: saturate(50%);
    background: inherit;
  }
`
