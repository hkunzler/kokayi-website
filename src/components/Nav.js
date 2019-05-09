import React from 'react';
import { Navbar, NavItem } from 'react-materialize';

const Nav = ({}) => (
  <div>
<Navbar fixed='top' brand={<a href="#home" class="brand-logo" >Kokayi Nosakhere <div className='icons'><i class="fab fa-facebook-square"></i><i class="fab fa-twitter-square"></i><i class="fab fa-linkedin"></i><i class="fab fa-medium"></i></div></a>} alignLinks="right">
<NavItem href="#home" className='sidenav-close'>
Home
</NavItem>
<NavItem href="#bio" className='sidenav-close'>
Bio
</NavItem>
<NavItem href="#articles" className='sidenav-close'>
Articles
</NavItem>
<NavItem href="#videos" className='sidenav-close'>
Videos
</NavItem>
</Navbar>
  </div>
);

export default Nav;
