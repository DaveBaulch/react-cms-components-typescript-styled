import React from 'react';
import '../../sass/components/_skip-=.scss';

const SkipLink = (props) => {
  return (
    <a href="#main" id="skip-navigation" className="skip-link">
      {props.children}
    </a>
  );
};

export default SkipLink;
