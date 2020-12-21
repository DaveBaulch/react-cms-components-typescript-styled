import React from 'react';
import { useEffect, useRef, useState } from 'react';
import '../../sass/components/_scroll-top-button.scss';

const ScrollTopButton = (props) => {
  const buttonRef = useRef();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const logit = () => {
      console.log('here2');
      setScrollY(document.body.pageYOffset);
      console.log(scrollY);
    };

    function watchScroll() {
      console.log('here');
      window.addEventListener('scroll', logit, { passive: true });
    }
    watchScroll();
    // Remove listener (like componentWillUnmount)
    return () => {
      window.removeEventListener('scroll', logit);
    };
  }, [scrollY]);
  return (
    <div>
      Scroll position: {scrollY}px
      <a href="#skip-navigation" ref={buttonRef} className="btn-scroll-top">
        {props.children}
      </a>
    </div>
  );
};

export default ScrollTopButton;
