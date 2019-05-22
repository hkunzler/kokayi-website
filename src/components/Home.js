import React from 'react';
import { Row, Card, CardTitle, Col } from 'react-materialize';
import FlipClock from 'x-react-flipclock'

const Home = ({}) => (
  <div id='home'>
  <Row>
    <Col m={6} s={12}>
      <Card style={{textAlign: 'center'}} header={<CardTitle />} actions={[<h5>Quick Links</h5>, <div className='quick-links'><a href='#bio'>Bio</a> <a href='#articles'>Articles</a> <a href='#videos'>Videos</a> <a href='#news'>News</a> </div>]}>
      <div className='home-red-box'>Kokayi On Tour</div>
      <div className='tour'>06 . 01 . 2019 </div>
      <div className='kokayi-fist'></div>
      <div className='top-right-text'>Reach Out</div>
      </Card>
    </Col>
  </Row>
</div>);

export default Home;
