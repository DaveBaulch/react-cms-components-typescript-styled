import React from 'react';
import { Link } from 'react-router-dom';
import SidenavClose from './SidenavClose';

const Sidenav = ({ onNavClick }) => {
  return (
    <div className="sidenav-container">
      <div className="sidenav-backdrop" onClick={() => onNavClick()}></div>

      <div className="sidenav-wrapper">
        <div className="sidenav">
          <SidenavClose onNavClick={onNavClick} />

          <h2>Components</h2>
          <ul className="nav-list">
            <Link to="/hero" className="nav-item">
              Hero
            </Link>
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
