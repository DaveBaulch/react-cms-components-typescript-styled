import React from 'react';
import { useContext } from 'react';
import NavigationContext from '../../contexts/NavigationContext';
import { Link } from 'react-router-dom';
import SidenavOpenButton from '../Sidenav/SidenavOpenButton';
import './Header.scss';

const Logo = () => {

  return (

          <div className="logo">
            <Link to="/" className="logo__link">
              Site logo
            </Link>
          </div>

  );
};

export default Logo;
