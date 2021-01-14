import React from 'react';
import PropTypes from 'prop-types';
import './SkipLink.scss';

const SkipLink = ({ children }) => (
  <a href="#main" id="skip-navigation" className="skip-link">
    {children}
  </a>
);

ButtonLink.propTypes = {
  children: PropTypes.any.isRequired
};

export default SkipLink;
