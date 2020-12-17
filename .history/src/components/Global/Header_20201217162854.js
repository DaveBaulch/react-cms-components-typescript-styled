import React from 'react';
import SidenavToggle from './SidenavToggle';

const Header = ({ onNavClick }) => {
  return (
    <div className="header-container">
      <div className="container">
        <header className="header"><>
          <SidenavToggle onNavClick={onNavClick} />
  border: 1px solid $white;
          <div className="logo"><a href="/" className="">Site logo</div>
          <div className="navigation-items"></div>
        </header>
      </div>
    </div>
  );
};

export default Header;
