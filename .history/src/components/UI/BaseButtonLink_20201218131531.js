import React from 'react';
import '../../sass/components/_buttons.scss';

const ButtonLink = (props) => {
  return <button className="button" className={props.className}`>{props.children}</button>;
};

export default ButtonLink;
