import React from 'react';
import { Link } from 'react-router-dom';
import SidenavClose from './SidenavClose';

const Sidenav = ({ onNavClick }) => {
  return (
    <div className="sidenav-container">
      <div className="sidenav-backdrop" onClick={() => onActiveChange()}></div>

      <div className="sidenav-wrapper">
        <SidenavClose onNavClick={onNavClick} />

        <div className="sidenav" onClick={() => onNavClick()}>
          <h2>Components</h2>
          <ul className="component-list">
            <li className="component-list__item">
              <Link to="/hero" className="component-list__link">
                Hero
              </Link>
            </li>
            <li className="component-list__item">
              <Link to="/carousel" className="component-list__link">
                Carousel
              </Link>
            </li>
            <li className="component-list__item">
              <Link to="/cards" className="component-list__link">
                Cards
              </Link>
            </li>
            <li className="component-list__item">
              <Link to="/sectors" className="component-list__link">
                Sectors
              </Link>
            </li>
            <li className="component-list__item">
              <Link to="/cta" className="component-list__link">
                CTA
              </Link>
            </li>
            <li className="component-list__item">
              <Link to="/quote" className="component-list__link">
                Quote
              </Link>
            </li>
            <li className="component-list__item">
              <Link to="/text" className="component-list__link">
                Text
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
