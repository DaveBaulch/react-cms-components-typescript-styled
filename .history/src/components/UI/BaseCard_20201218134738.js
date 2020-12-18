import React from 'react';

const BaseCard = (props) => {
  return (
    <div>
      <slot></slot>
    </div>
  );
};

export default BaseCard;
