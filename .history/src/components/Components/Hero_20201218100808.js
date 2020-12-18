import React from 'react';

const Hero = (props) => {
  return (
    <a href={props.href} className="social-sharing-item">
      {props.children}
    </a>
  );
};

export default Hero;
