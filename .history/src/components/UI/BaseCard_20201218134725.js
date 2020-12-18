import React from 'react';

const BaseCard = (props) => {
  return <button className="button">{props.children}</button>;
};

export default BaseCard;
