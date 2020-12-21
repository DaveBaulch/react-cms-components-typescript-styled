import React from 'react';
import { useEffect, useRef, useState } from 'react';
import '../../sass/components/_scroll-top-button.scss';

const ScrollTopButton = (props) => {
  const buttonRef = useRef();
  const [scrollY, setScrollY] = useState(0);

  function handleScroll() {
    setScrollY(window.pageYOffset);
    console.log('here');
    console.log(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', handleScroll);
    }
    watchScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onClick = () => {
    alert();
    // window.scrollTo(0, 0);
  };

  return (
    <div>
      Scroll position: {scrollY}px
      <a
        href="#skip-navigation"
        ref={buttonRef}
        className="btn-scroll-top"
        onClick={onClick}
      >
        {props.children}
      </a>
    </div>
  );
};

export default ScrollTopButton;
