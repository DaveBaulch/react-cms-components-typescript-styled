import React, {MouseEvent} from 'react';
import { useContext } from 'react';
import NavigationContext from '../../contexts/NavigationContext';
import SidenavOpenButton from '../Sidenav/SidenavOpenButton';
import './Header.scss';
import Logo from '../Logo';

interface IHeader {
  onClick: any
}

const Header: React.FC<IHeader> = ({ userType, username }): JSX.Element => {

  const { onActiveChange } = useContext(NavigationContext);
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
