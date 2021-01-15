import React from 'react';
import { useContext } from 'react';
import NavigationContext from '../../contexts/NavigationContext';
import SidenavOpenButton from '../Sidenav/SidenavOpenButton';
import './Header.scss';
import Logo from '../Logo';

type Props = {
  onClick: (...args: any[]) => any;
};

const Header = () => {
  const { onActiveChange } = useContext(NavigationContext);
  return (
    <div className="header-container">
      <div className="container">
        <header className="header">
          <SidenavOpenButton onClick={({ onClick }: Props) => onActiveChange()} />
          <Logo>Site logo</Logo>
        </header>
      </div>
    </div>
  );
};

export default Header;
