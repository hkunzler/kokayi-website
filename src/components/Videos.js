import React from 'react';
import { video } from 'react-materialize';

const Videos = ({}) => (
  <div id='videos' style={{background: 'white', padding: '50px 0', margin: '50% 0'}}>
    <h3 style={{textAlign:'center', background: '#222222', color:'white', margin: '0 2%', padding: '15px 0'}}>Videos</h3>
    <div className='vid-grid' style={{margin: '25px 2%'}}>
<div>
      <h5>Choose to Heal White People</h5>
      <div class="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/KyqNvqw0yKI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
      </div>
    <div style={{margin: '50px 2%'}}>
<div>
      <h5>On Reparations in 2019 and Anti-Racism Work</h5>
      <div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/3mGINvxPESo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
      </div>
    </div>
    <div style={{margin: '50px 2%'}}>
<div>
      <h5>To Inspire America</h5>
      <div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ce4VZcJ3I6g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
    </div>
    <div style={{margin: '50px 2%'}}>
<div>
      <h5>3/14 Beyond the Culture of Individualism</h5>
      <div class="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/KyqNvqw0yKI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
      </div>
    </div>
</div>
  </div>
);

export default Videos;
