import React from 'react';
const SidenavClose = ({ onNavClick }) => {
  return (
    <div className="drawer-toggle" role="button" onClick={() => onNavClick()}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export default SidenavClose;
