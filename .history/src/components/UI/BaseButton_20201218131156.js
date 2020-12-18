import React from 'react';
import '../../sass/components/_buttons.scss';

const Button = (props) => {
  return (
  <button
    class="button"
    :class="btnStyle"
  ><slot /></button>
  );
};

export default Button;
