import React from 'react';
import { useEffect, useRef } from 'react';
import '../../sass/components/_scroll-top-button.scss';

const ScrollTopButton = (props) => {
  useEffect(() => {}, []);

  const onClick = () => {
    alert();
    window.scrollTo(0, 0);
  };

  return (
    <a href="#skip-navigation" className="btn-scroll-top" onClick={onClick}>
      {props.children}
    </a>
  );
};

export default ScrollTopButton;
