import React from 'react';
import './Buttons.scss';

const ButtonLink = (props) => {
  return (
    <a href={props.href} className={`button ${props.btnClass}`}>
      {props.children}
    </a>
  );
};

export default ButtonLink;
