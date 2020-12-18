import React from 'react';
import '../../sass/components/_buttons.scss';

const Button = (props) => {
  return (
  <button
    classname="button"
    class="btnStyle"
  > { props.children }
  </button >
  );
};

export default Button;
