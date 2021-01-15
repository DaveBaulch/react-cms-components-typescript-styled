import React from 'react';
import { useContext } from 'react';
import NavigationContext from '../../contexts/NavigationContext';
import SidenavOpenButton from '../Sidenav/SidenavOpenButton';
import './Header.scss';
import Logo from '../Logo';

interface IHeaderOwnProps {
  username: string | undefined;
  userType: 'admin' | 'moderator' | 'user' | 'guest';
}

const Headerp: React.FC<IHeaderOwnProps> = ({ userType, username }): JSX.Element => {ge } = useContext(NavigationContext);
  return (
    <div className="header-container">
      <div className="container">
        <header className="header">
          <SidenavOpenButton onClick={() => onActiveChange()} />
          <Logo>Site logo</Logo>
        </header>
      </div>
    </div>
  );
};

export default Header;