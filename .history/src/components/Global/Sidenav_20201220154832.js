import React from 'react';
import { Link } from 'react-router-dom';
import SidenavClose from './SidenavClose';
import { useContext } from 'react';
import NavigationContext from '../../contexts/NavigationContext';
import FocusTrap from 'focus-trap-react';

const Sidenav = ({ onNavClick }) => {
  const { isActive, onActiveChange } = useContext(NavigationContext);

  return (
    <div className="sidenav-container">
      <div className="sidenav-backdrop" onClick={() => onActiveChange()}></div>

      <FocusTrap active={isActive}>
        <div className="sidenav-wrapper">
          <SidenavClose onClick={() => onActiveChange()} />

          <div className="sidenav" onClick={() => onActiveChange()}>
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
      </FocusTrap>
    </div>
  );
};

export default Sidenav;
