import React from 'react';
import './ButtonLink.scss';

const ButtonLink = ({ variant, href }) => {
  return (
    <a href={href} className={`button ${variabt}`}>
      {props.children}
    </a>
  );
};

export default ButtonLink;
