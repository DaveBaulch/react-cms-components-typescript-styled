import React from 'react';
import { useContext } from 'react';
import NavigationContext from '../../contexts/NavigationContext';

// const SidenavToggle = ({ onNavClick }) => {
//   return (
//     <div className="drawer-toggle" role="button" onClick={() => onNavClick()}>
//       <div className="bar"></div>
//       <div className="bar"></div>
//       <div className="bar"></div>
//     </div>
//   );
// };

// const SidenavToggle = ({ onNavClick }) => {
//   return (
//     <div className="drawer-toggle" role="button" onClick={() => onNavClick()}>
//       <div className="bar"></div>
//       <div className="bar"></div>
//       <div className="bar"></div>
//     </div>
//   );
//

const SidenavToggle = () => {
  const state = useContext(NavigationContext);

  return (
    <div></div>
    <div
      className="drawer-toggle"
      role="button"
    >
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export default SidenavToggle;
