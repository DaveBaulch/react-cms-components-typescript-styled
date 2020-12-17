import React from 'react';

const SidenavToggle = ({ onNavClick}) => {
  return (
    <div
      className="drawer-toggle"
      role="button"
      onClick={(onNavClick = { onNavClick })}
    >
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export default SidenavToggle;
