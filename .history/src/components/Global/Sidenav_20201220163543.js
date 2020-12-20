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
      <FocusTrap active={isActive}>
        <div>
          <div
            className="sidenav-backdrop"
            onClick={() => onActiveChange()}
          ></div>

          <div className="sidenav-wrapper">
            <SidenavClose onClick={() => onActiveChange()} />

            <div className="sidenav" onClick={() => onActiveChange()}>
              <h2>Components</h2>
              <ul className="component-list">
                <li className="component-list__item">
                  <Link
                    to="/hero"
                    className="component-list__link"
                    hidden={!isActive}
                  >
                    Hero
                  </Link>
                </li>
                <li className="component-list__item">
                  <Link
                    to="/carousel"
                    className="component-list__link"
                    hidden={!isActive}
                  >
                    Carousel
                  </Link>
                </li>
                <li className="component-list__item">
                  <Link
                    to="/cards"
                    className="component-list__link"
                    hidden={!isActive}
                  >
                    Cards
                  </Link>
                </li>
                <li className="component-list__item">
                  <Link
                    to="/sectors"
                    className="component-list__link"
                    hidden={!isActive}
                  >
                    Sectors
                  </Link>
                </li>
                <li className="component-list__item">
                  <Link
                    to="/cta"
                    className="component-list__link"
                    hidden={!isActive}
                  >
                    CTA
                  </Link>
                </li>
                <li className="component-list__item">
                  <Link
                    to="/quote"
                    className="component-list__link"
                    hidden={!isActive}
                  >
                    Quote
                  </Link>
                </li>
                <li className="component-list__item">
                  <Link to="/text" className="component-list__link" >
                    Text
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </FocusTrap>
    </div>
  );
};

export default Sidenav;
