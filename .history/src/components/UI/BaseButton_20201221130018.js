import React from 'react';
import '../../sass/components/_buttons.scss';

const Button = ({ btnClass, children }) => {
  return <button className={`button ${btnClass}`}>{children}</button>;
};

export default Button;
