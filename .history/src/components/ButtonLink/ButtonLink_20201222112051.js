import React from 'react';
import './ButtonLink.scss';

const ButtonLink = ({ variant, href }) => {
  return (
    <a href={href} className={`button ${variant}`}>
      {children}
    </a>
  );
};

export default ButtonLink;
