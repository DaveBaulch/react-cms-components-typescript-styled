import React from 'react';
import { useEffect, useRef, useContext } from 'react';
import '../../sass/components/_scroll-top-button.scss';

const ScrollTopButton = (props) => {

 useEffect(() => {
   if (isActive) {
     buttonRef.current.focus();
   }
 }, [isActive]);
  
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
