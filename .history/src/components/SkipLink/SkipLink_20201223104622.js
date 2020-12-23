import React from 'react';
import './SkipLink.scss';

const SkipLink = ({ children }) => (
  <a href="#main" id="skip-navigation" className="skip-link">
    {children}
  </a>
);

export default SkipLink;
