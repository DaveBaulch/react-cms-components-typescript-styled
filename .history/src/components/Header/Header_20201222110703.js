import React from 'react';
import { useContext } from 'react';
import NavigationContext from '../../contexts/NavigationContext';
import { Link } from 'react-router-dom';
import SidenavToggle from '../OenButton';

const Header = () => {
  const { onActiveChange } = useContext(NavigationContext);

  return (
    <div className="header-container">
      <div className="container">
        <header className="header">
          <SidenavToggle onClick={() => onActiveChange()} />
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
