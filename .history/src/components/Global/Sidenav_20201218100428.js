import React from 'react';
import SidenavClose from './SidenavClose';

const Sidenav = ({ navState, onNavClick }) => {
  return (
    <div className="sidenav-container">
      <div className="sidenav-backdrop" onClick={() => onNavClick()}></div>

      <div className="sidenav-wrapper">
        <div className="sidenav">
          <SidenavClose onNavClick={onNavClick} />

          <h2>Components</h2>
          <ul className="nav-list">
            <li className="nav-item">Hero</li>
            <li className="nav-item">Carousel</li>
            <li className="nav-item">Sectors</li>
            <li className="nav-item">Cards</li>
            <li className="nav-item">CTA</li>
            <li className="nav-item">Quote</li>
            <li className="nav-item">Text</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
