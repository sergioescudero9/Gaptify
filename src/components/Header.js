import React from 'react';
import Nav from './Nav';
import Logo from './Logo';

function Header() {
  return (
    <header>
      <h2><Logo /></h2>
      <Nav />
    </header>
  );
}

export default Header;
