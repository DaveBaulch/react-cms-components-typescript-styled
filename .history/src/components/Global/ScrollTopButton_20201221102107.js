import React from 'react';
import '../../sass/components/_scroll-top-button.scss';

const ScrollTopButton = (props) => {
  // const onClick = () => {
  //   alert();
  //   window.scrollTo(0, 0);
  // };

  return (
    <a
      href="#skip-navigation"
      className="btn-scroll-top"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      {props.children}
    </a>
  );
};

export default ScrollTopButton;
