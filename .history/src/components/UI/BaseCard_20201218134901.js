import React from 'react';
import '../../sass/components/_base-card.scss';

const BaseCard = (props) => {
  return <div className="base-card">{props.children}</div>;
};

export default BaseCard;
