import React from 'react';
import './buttons.scss';

const ButtonLink = (props) => {
  return (
    <a href={props.href} className={`button ${props.btnClass}`}>
      {props.children}
    </a>
  );
};

export default ButtonLink;
