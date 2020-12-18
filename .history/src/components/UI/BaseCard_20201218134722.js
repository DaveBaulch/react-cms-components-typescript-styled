import React from 'react';

const BaseCard = () => {
  return <button className="button">{props.children}</button>;
};

export default BaseCard;
