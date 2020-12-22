import React from 'react';
import './Button.scss';

const Button = ({ variant, children }) => {
  return <button className={`button ${btnClass}`}>{children}</button>;
};

export default Button;
