import React from 'react';
import '../../sass/components/_buttons.scss';

const ButtonLink = (props) => {
  return (
    <a href={ props.} className={props.className}>
      {props.children}
    </a>
  );
};

export default ButtonLink;
