import React from 'react';
import './SkipLink.scss';

const SkipLink = ({ children }) => {
  return (
    <a href="#main" id="skip-navigation" className="skip-link">
      {props.children}
    </a>
  );
};

export default SkipLink;
