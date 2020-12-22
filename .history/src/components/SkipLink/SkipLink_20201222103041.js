import React from 'react';
import './Sink.scss';

const SkipLink = (props) => {
  return (
    <a href="#main" id="skip-navigation" className="skip-link">
      {props.children}
    </a>
  );
};

export default SkipLink;
