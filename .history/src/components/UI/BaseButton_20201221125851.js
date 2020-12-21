import React from 'react';
import '../../sass/components/_buttons.scss';

const Button = ({btnClassName}) => {
  return (
    <button className={`button ${props.btnClassName}`}>{props.children}</button>
  );
};

export default Button;
