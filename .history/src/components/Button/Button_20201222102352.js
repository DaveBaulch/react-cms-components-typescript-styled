import React from 'react';
import '.Buttons.scss';

const Button = ({ btnClass, children }) => {
  return <button className={`button ${btnClass}`}>{children}</button>;
};

export default Button;
