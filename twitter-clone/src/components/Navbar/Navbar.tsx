import React from 'react';
import './Navbar.scss';
import { FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__left'>
        <FaTwitter className='navbar__left-logo'/>
        <p>Another Twitter Clone</p>
      </div>
      <div className='navbar__right'>
        <p>John Smith</p>
        <p className='navbar__right-initials'>JS</p>
      </div>
    </nav>
  );
};

export default Navbar;
