import React from 'react';

const SidenavToggle = ({ onNavClick}) => {
  return (
    <div
      className="drawer-toggle"
      role="button"
      onClick={() => onNavClick()}
    >
      <div className="bar"></div>
      <div className="bar"></div>
      <di className="bar"></di
    </div>
  );
};

export default SidenavToggle;
