import React from 'react';

const BaseCard = (props) => {
  return (
    <div className="">
      <slot></slot>
    </div>
  );
};

export default BaseCard;
