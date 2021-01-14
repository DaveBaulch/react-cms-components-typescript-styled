import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Logo.scss';

const Logo = ({ children }) => (
  <div className="logo">
    <Link to="/" className="logo__link">
      {children}
    </Link>
  </div>
);

export default Logo;
