import React from 'react';
import '../../sass/components/_buttons.scss';

const Base = (props) => {
  return <button className="button">{props.children}</button>;
};

export default Button;
