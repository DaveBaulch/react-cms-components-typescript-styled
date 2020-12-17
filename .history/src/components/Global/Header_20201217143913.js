import React from 'react';
import SidenavToggle from './SidenavToggle';

const Header = () => {
  return (
    <div class="header-container">
      <div class="container">
        <header class="header">
          <SidenavToggle />
          <div className="logo">Site logo</div>
          <div className="navigation-items"></div>
        </header>
      </div>
    </div>
  );
};

export default Header;
