import React from 'react';
import { Row, Card, CardTitle, Col } from 'react-materialize';

const Articles = ({}) => (
  <div id='articles'>
  <h3 style={{textAlign:'center', background: '#222222', color:'white', margin: '0 2%', padding: '15px 0'}}>Articles</h3>
  <div className='grid'>
  <Row>
    <Col m={6} s={12}>
      <Card horizontal="horizontal" header={<CardTitle />} actions={[<h5>On Food Stamps and Alaska's Senators</h5>, <small>by KOKAYI NOSAKHERE <br/> Jul 5, 2018<br/><br/></small>, <a href='https://www.anchoragepress.com/columnists/on-food-stamps-and-alaska-s-senators/article_3b83ebc0-80a2-11e8-8d12-d36ca500734c.html'>Read Here</a>]}>
        <div className='food-stamp'></div>
      </Card>
    </Col>
  </Row>
  <Row>
    <Col m={6} s={12}>
      <Card horizontal="horizontal" header={<CardTitle />} actions={[<h5>Jed Whittaker, the ‘Don Quixote’ of Alaskan politicians, takes aim at Don Young</h5>, <small>by KOKAYI NOSAKHERE <br/> Jun 22, 2018 <br/><br/></small>, <a href='https://www.anchoragepress.com/news/jed-whittaker-the-don-quixote-of-alaskan-politicians-takes-aim/article_88ba1550-7651-11e8-88fd-bb592f9d5be6.html'>Read Here</a>]}>
        <div className='jed-whittaker'></div>
      </Card>
    </Col>
  </Row>
  <Row>
    <Col m={6} s={12}>
      <Card horizontal="horizontal" header={<CardTitle />} actions={[<h5>SOLUTIONS, ANCHORAGE: ‘InCels’ and a changing world for sex workers</h5>, <small>by KOKAYI NOSAKHERE <br/>May 23, 2018 <br/><br/></small>, <a href='https://www.anchoragepress.com/columnists/solutions-anchorage-incels-and-a-changing-world-for-sex-workers/article_1115668c-5ef3-11e8-a0fa-cfa6a3d5f9af.html'>Read Here</a>]}>
        <div className='sex-workers'></div>
      </Card>
    </Col>
  </Row>
  <Row>
    <Col m={6} s={12}>
      <Card horizontal="horizontal" header={<CardTitle />} actions={[<h5>SOLUTIONS, ANCHORAGE: Alaska vs. Don Young</h5>, <small>by KOKAYI NOSAKHERE <br/>April 26, 2018 <br/><br/></small>, <a href='https://www.anchoragepress.com/columnists/solutions-anchorage-alaska-vs-don-young/article_81c019a8-49f0-11e8-9b0c-07d0e7de70db.html'>Read Here</a>]}>
        <div className='don-young'></div>
      </Card>
    </Col>
  </Row>
  <Row>
    <Col m={6} s={12}>
      <Card horizontal="horizontal" header={<CardTitle />} actions={[<h5>SOLUTIONS, ANCHORAGE: Tackling Anchorage’s dark side</h5>, <small>by KOKAYI NOSAKHERE <br/>May 18, 2018 <br/><br/></small>, <a href='https://www.anchoragepress.com/columnists/solutions-anchorage-tackling-anchorage-s-dark-side/article_76b49e20-5ae5-11e8-a23d-2f1eaaa47f6b.html'>Read Here</a>]}>
        <div className='dark-side'></div>
      </Card>
    </Col>
  </Row>
  <Row>
    <Col m={6} s={12}>
      <Card horizontal="horizontal" header={<CardTitle />} actions={[<h5>Reasons for the high rate of rape in Alaska</h5>, <small>by KOKAYI NOSAKHERE <br/>May 2, 2018 <br/><br/></small>, <a href='https://www.anchoragepress.com/columnists/reasons-for-the-high-rate-of-rape-in-alaska/article_564f37fa-4e4f-11e8-b893-47cba59bd374.html'>Read Here</a>]}>
        <div className='high-rape'></div>
      </Card>
    </Col>
  </Row>
  <Row>
    <Col m={6} s={12}>
      <Card horizontal="horizontal" header={<CardTitle />} actions={[<h5>Lorenzo Wilson and the promise of real estate</h5>, <small>by KOKAYI NOSAKHERE <br/>AugMay 10, 2018 <br/><br/></small>, <a href='https://www.anchoragepress.com/columnists/on-food-stamps-and-alaska-s-senators/article_3b83ebc0-80a2-11e8-8d12-d36ca500734c.html'>Read Here</a>]}>
        <div className='lorenzo-wilson'></div>
      </Card>
    </Col>
  </Row>
  </div>
</div>);

export default Articles;
