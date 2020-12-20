import React from 'react';
import '../../sass/components/_scroll-top-button.scss';

const S = (props) => {
  return (
    <a href="#skip-navigation" className="btn-scroll-top">
      {props.children}
    </a>
  );
};

export default ScrollTopButton;
