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

const EventCard = ({ id, title, organizerImg, organizerName }) => (
  <Card>
  <CardMedia
    overlay={<CardTitle title="DevC: First Meetup and Hackathon" subtitle="by Facebook Developer Circle" />}
  >
    <img src="https://scontent.fbkk2-3.fna.fbcdn.net/v/t31.0-8/21640777_10155526785212597_3802686456531762674_o.jpg?oh=42c2b8bdded68612cea212034f2acdaf&oe=5AA9B321" alt="" />
  </CardMedia>
  <CardTitle title="รายละเอียด" subtitle="" />
  <CardText>
  เปิดให้ Register ตอนเที่ยงตรง วันที่ 23 ตุลาคม 2560

  https://www.eventpop.me/e/2489

  Facebook Developer Circle: Bangkok กำลังจะจัดงาน Meetup Launch และ Hackathon ในวันที่ 27-28 ตุลาคม นี้นะคะ ตารางจะประมาณนี้

  27 ตค. ช่วงเย็น — คืองาน Meetup lanuch ครั้งแรกของ Bangkok circle นะคะ มาพบปะกัน มี keynote จาก facebook และมี speakers ระดับเทพ ขออุบไว้ก่อนว่าเป็นใคร มากระทบไหล่เทพแบบตัวๆ กันเลย

  หลัง meetup ก็ต่อ hackathon ยาวจน 28 ตค. เลย ค้างคืน มีที่อาบน้ำนะคะ

  งานนี้ของแจกเพียบ จำนวนจำกัดด้วยจ้า เสื้อ แก้ว สติ๊กเกอร์รุ่นแรกของ Facebook Deceloper Circle เลย

  สำหรับน้องๆ ที่กลัวการ hack ไม่ต้องห่วงนะคะ เรามี mentor คอยช่วยเหลือ และน้องจะได้รับประสบการณ์ที่ดีมากๆ กลับไปแน่นอน

  จัดทีม hackathon ไว้นะคะ ชิงรางวัลสูงสุดจาก Facebook Global นะคะ $20000 หรือ 700,000 บาท งานนี้ Facebook ลงทุนมากกก มีรางวัลหลายประเภทด้วย ทั้งเดี่ยว และองค์กร ลองดูลิงค์ แล้วจัดทีมมานะคะ
  นอกจากรางวัล global เราจะมีรางวัลพิเศษเฉพาะ circle เราด้วย บอกเลยไม่ธรรมดา

  สำหรับคนที่ไม่ได้มา hack ก็มาพบปะ meetup กระทบไหล่คนดัง และมาเสพความรู้กันค่ะ ในช่วงเย็นวันศุกร์ 27 ตค. งานนี้ใหญ่มากจริงๆ
  </CardText>
  <CardActions style={{textAlign: 'right'}}>
    <FlatButton label="Go" />
    <FlatButton label="Interest" />
    <FlatButton label="Cancel" />
  </CardActions>
</Card>
);

export default EventCard
