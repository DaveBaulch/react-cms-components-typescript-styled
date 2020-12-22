import React from 'react';
import { useContext } from 'react';
import NavigationContext from '../../contexts/NavigationContext';
import { Link } from 'react-router-dom';
import SidenavOpenButton from '../Sidenav/SidenavOpenButton';
import './Header.scss';
import SocialSharing from '../SocialSharing';

const Header = () => {
  const { onActiveChange } = useContext(NavigationContext);
  return (
    <div className="header-container">
      <div className="container">
        <header className="header">
          <SidenavOpenButton onClick={() => onActiveChange()} />
          <Logo>Link to homepage</Logo>
          <div className="navigation-items"></div>
        </header>
      </div>
    </div>
  );
};

export default Header;
