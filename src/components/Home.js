import React from 'react';
import { Row, Card, CardTitle, Col } from 'react-materialize';
import FlipClock from 'x-react-flipclock'

const Home = ({}) => (
  <div id='home'>
  <Row>
    <Col m={6} s={12}>
      <Card style={{textAlign: 'center'}} header={<CardTitle />} actions={[<h5>Quick Links</h5>, <div className='quick-links'><a href='#'>Bio</a>, <a href='#'>Articles</a>, <a href='#'>Videos</a></div>]}>
      <div className='home-red-box'>My Latest Offer For</div>
      <FlipClock
    type = "countdown"
    count_to = "2019-12-25 00:00:00"
 />
      <div className='kokayi-fist'></div>
      <div className='top-right-text'>Purchase Theme</div>
      </Card>
    </Col>
  </Row>
</div>);

export default Home;
