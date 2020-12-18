import React from 'react';

const BaseCard = (props) => {
  return (
    <div className="base-card">
      <slot></slot>
    </div>
  );
};

export default BaseCard;
