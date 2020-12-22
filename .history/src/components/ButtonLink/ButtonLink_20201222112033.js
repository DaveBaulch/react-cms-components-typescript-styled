import React from 'react';
import './ButtonLink.scss';

const ButtonLink = ({variant, href) => {
  return (
    <a href={props.href} className={`button ${props.btnClass}`}>
      {props.children}
    </a>
  );
};

export default ButtonLink;
