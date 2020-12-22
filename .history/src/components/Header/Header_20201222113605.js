import React from 'react';
import { useContext } from 'react';
import NavigationContext from '../../contexts/NavigationContext';
import { Link } from 'react-router-dom';
import SidenavOpenButton from '../Sidenav/SidenavOpenButton';
import './CarouselItem.scss';

const Header = () => {
  const { onActiveChange } = useContext(NavigationContext);
  return (
    <div className="header-container">
      <div className="container">
        <header className="header">
          <SidenavOpenButton onClick={() => onActiveChange()} />
          <div className="logo">
            <Link to="/" className="logo__link">
              Site logo
            </Link>
          </div>
          <div className="navigation-items"></div>
        </header>
      </div>
    </div>
  );
};

export default Header;
