import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

const Logo = ({ children}) => {
  return (
    <div className="logo">
      <Link to="/" className="logo__link">
        Site logo
      </Link>
    </div>
  );
};

export default Logo;
