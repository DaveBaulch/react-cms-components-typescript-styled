import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Logo.scss';

const Logo = ({ children }) => (
  <div className="logo">
    <Link to="/" className="logo__link">
      {children}
    </Link>
  </div>
);

ButtonLink.propTypes = {
  children: PropTypes.string,
  children: PropTypes.any.isRequired
};

export default Logo;
