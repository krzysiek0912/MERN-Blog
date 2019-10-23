import React from 'react';
import MainMenu from '../../layout/MainMenu/MainMenu';

const links = [
  { path: '/', title: 'Home' },
  { path: '/posts', title: 'Posts' },
  { path: '/contact', title: 'Contact' },
  { path: '/posts/new', title: 'Add post' },
];

const NavBar = () => (
  <div>
    <MainMenu links={links} />
  </div>
);

export default NavBar;
