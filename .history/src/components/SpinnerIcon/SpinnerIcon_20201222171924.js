import React from 'react';
import './SpinnerIcon.scss';

const SpinnerIcon = () => {
  return (
    <div class="lds-roller">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default SpinnerIcon;
