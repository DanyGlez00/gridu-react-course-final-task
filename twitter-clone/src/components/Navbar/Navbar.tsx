import React from 'react';
import { FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__left'>
        <FaTwitter />
        <p>Another Twitter Clone</p>
      </div>
      <div className='navbar__right'>
        <p>John Smith</p>
        <p>JS</p>
      </div>
    </nav>
  );
};

export default Navbar;
