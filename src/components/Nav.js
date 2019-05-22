import React from 'react';
import {Navbar, NavItem} from 'react-materialize';

const Nav = ({}) => (<div>
  <Navbar fixed='top' brand={<a href = "#home" class = "brand-logo" > Kokayi Nosakhere <div className='icons'> <a target='_blank' href='https://www.facebook.com/Kokayi137'>
      <i class="fab fa-facebook-square"></i>
    </a>
    <a target='_blank' href='https://twitter.com/kokayi137'>
      <i class="fab fa-twitter-square"></i>
    </a>
    <a target='_blank' href='https://www.linkedin.com/in/kokayi-nosakhere-8a5a877/'>
      <i class="fab fa-linkedin"></i>
    </a>
    <a target='_blank' href='https://medium.com/@Royalstar907'>
      <i class="fab fa-medium"></i>
    </a>
  </div>
</a>} alignLinks="right">

    <NavItem href="#home" className='sidenav-close'>
      Home
    </NavItem>
    <NavItem href="#bio" className='sidenav-close'>
      Bio
    </NavItem>
    <NavItem href="#videos" className='sidenav-close'>
      Videos
    </NavItem>
    <NavItem href="#news" className='sidenav-close'> News
    </NavItem>

    <NavItem href="#articles" className='sidenav-close'>
      Articles
    </NavItem>
  </Navbar>
</div>);

export default Nav;
