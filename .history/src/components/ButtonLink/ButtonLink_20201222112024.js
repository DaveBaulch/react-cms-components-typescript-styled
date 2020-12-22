import React from 'react';
import './ButtonLink.scss';

const ButtonLink = (variant, ) => {
  return (
    <a href={props.href} className={`button ${props.btnClass}`}>
      {props.children}
    </a>
  );
};

export default ButtonLink;
