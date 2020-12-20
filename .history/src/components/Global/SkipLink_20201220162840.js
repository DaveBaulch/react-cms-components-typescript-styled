import React from 'react';
import '../../sass/components/_scroll-top-button.scss';

const SkipLink = (props) => {
  return (
    <a 
      href="#main" 
      id="skip-navigation" 
      class="skip-link">
    {props.children}

  </a>
    <a href="#skip-navigation" className="btn-scroll-top">
      {props.children}
    </a>
  );
};

export default SkipLink;
