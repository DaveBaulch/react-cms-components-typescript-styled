import React from 'react';
import '../../sass/components/_scroll-top-button.scss';

const ScrollTopButton = (props) => {
  const onClick = () => {
    alert();
    window.scrollTo(0, 0);
  };

  return (
    <a href=" className="btn-scroll-top" onClick={onClick}>
      {props.children}
    </a>
  );
};

export default ScrollTopButton;
