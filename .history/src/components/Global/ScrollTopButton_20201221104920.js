import React from 'react';
import { useEffect, useRef, useState } from 'react';
import '../../sass/components/_scroll-top-button.scss';

const ScrollTopButton = (props) => {
  const buttonRef = useRef();
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', logit);
    }
    watchScroll();
    // Remove listener (like componentWillUnmount)
    return () => {
      window.removeEventListener('scroll', logit);
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
