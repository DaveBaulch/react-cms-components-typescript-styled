import React from 'react';
import './ButtonLink.scss';

const ButtonLink = ({ variant, href }) => {
  return (
    <a href={href} className={`button ${variant}`}>
      {props.children}
    </a>
  );
};

export default ButtonLink;
