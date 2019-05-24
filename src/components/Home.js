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
      <div className='top-right-text'><a target='_blank' style={{background:'none'}} href='https://www.facebook.com/Kokayi137'>Reach Out</a></div>
      <div style={{marginTop:'11%'}}className='top-right-text'><a target='_blank' style={{background:'none'}} href='https://www.gofundme.com/amplify-the-voice-of-poc-in-the-rogue-valley/donate'>Donate</a></div>
      </Card>
    </Col>
  </Row>
</div>);

export default Home;
