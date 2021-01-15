import React, {} from 'react';
import { useContext } from 'react';
import NavigationContext from '../../contexts/NavigationContext';
import SidenavOpenButton from '../Sidenav/SidenavOpenButton';
import './Header.scss';
import Logo from '../Logo';

interface IHeaderOwnProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Header: React.FC<IHeaderOwnProps> = (): JSX.Element => {

  const { onActiveChange } = useContext(NavigationContext);
  return (
    <div className="header-container">
      <div className="container">
        <header className="header">
          <SidenavOpenButton onClick={(event: React.MouseEvent<HTMLElement>) => onActiveChange()} />
          <Logo>Site logo</Logo>
        </header>
      </div>
    </div>
  );
};

export default Header;
