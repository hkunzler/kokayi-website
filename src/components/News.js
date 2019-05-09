import React from 'react';
import { Row, Card, CardTitle, Col } from 'react-materialize';

const News = ({}) => (
  <div id='news'>
    <h3 style={{textAlign:'center', background: '#222222', color:'white', margin: '0 2%', padding: '15px 0'}}>News</h3>
    <div className='grid'>
    <Row>
      <Col m={6} s={12}>
        <Card horizontal="horizontal" header={<CardTitle />} actions={[<h5>Ashland community kindness project gains national attention</h5>, <small>by Jennevieve Fong <br/> Feb 4, 2019<br/><br/></small>, <a src='https://ktvl.com/news/local/ashland-community-kindness-project-gains-national-attention'>Read Here</a>]}>
          <div className='ashland'></div>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col m={6} s={12}>
        <Card horizontal="horizontal" header={<CardTitle />} actions={[<h5>2017 Director’s Community Leadership Award Recipient</h5>, <small>2017<br/><br/></small>, <a src='https://www.fbi.gov/about/community-outreach/dcla/2017/anchorage-kokayi-nosakhere'>Read Here</a>]}>
          <div className='fbi'></div>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col m={6} s={12}>
        <Card horizontal="horizontal" header={<CardTitle />} actions={[<h5>Is Anchorage America’s most diverse city? Depends on who you ask</h5>, <small>by  Wesley Early <br/> May 30, 2017<br/><br/></small>, <a src='https://www.alaskapublic.org/2017/05/30/is-anchorage-americas-most-diverse-city-depends-on-who-you-ask/'>Read Here</a>]}>
          <div className='diverse'></div>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col m={6} s={12}>
        <Card horizontal="horizontal" header={<CardTitle />} actions={[<h5>49 Voices: Kokayi Nosakhere of Anchorage</h5>, <small>by  Wesley Early <br/> Feb 24, 2017<br/><br/></small>, <a src='https://www.alaskapublic.org/2017/02/24/49-voices-kokayi-nosakhere-of-anchorage/'>Read Here</a>]}>
          <div className='voices'></div>
        </Card>
      </Col>
    </Row>
  </div>
  </div>
);

export default News;
