import React from 'react';
import { useContext } from 'react';
import NavigationContext from '../../contexts/NavigationContext.js';
import SidenavOpenButton from '../Sidenav/SidenavOpenButton';
import Container from '../Sidenav/Container';
import './Header.scss';
import Logo from '../Logo';

const Header = () => {
  const { onActiveChange } = useContext(NavigationContext);
  return (
    <div className="header-container">
      <Container>
        <header className="header">
          <SidenavOpenButton onClick={() => onActiveChange()} />
          <Logo>Site logo</Logo>
        </header>
      </Container>
    </div>
  );
};

export default Header;
