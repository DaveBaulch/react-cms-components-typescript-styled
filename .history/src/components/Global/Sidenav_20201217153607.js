import React from 'react';

const Sidenav = ({ navState, onNavClick }) => {
  return (
    <div className="sidenav-container">
      {navState && (
        <div className="sidenav-backdrop" onClick={() => onNavClick()}></div>
      )}

      {navState && (
        <div className="sidenav-wrapper">
          <div className="sidenav">
            <h2>Components</h2>
            <ul className="nav-list">
              <li className="nav-item">Hero</li>
              <li className="nav-item">Carousel</li>
              <li className="nav-item">Sectors</li>
              <li className="nav-item">Cards</li>
              <li className="nav-item">CTA</li>
              <li className="nav-item">Quote</li>
              <li className="nav-item">Text</li>
              <li className="nav-item">Accordion</li>
            </ul>

            <h2>Pages</h2>
            <ul className="nav-list">
              <li className="nav-item">Test page</li>
              <li className="nav-item">Test page 2</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidenav;
