import React from 'react';
import { useEffect, useRef } from 'react';
import '../../sass/components/_scroll-top-button.scss';

const ScrollTopButton = (props) => {
  const buttonRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    
  };

  const onClick = () => {
    alert();
    window.scrollTo(0, 0);
  };

  return (
    <a
      href="#skip-navigation"
      ref={buttonRef}
      className="btn-scroll-top"
      onClick={onClick}
    >
      {props.children}
    </a>
  );
};

export default ScrollTopButton;
