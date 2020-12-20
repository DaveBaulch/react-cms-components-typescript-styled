import React from 'react';
import { useContext } from 'react';
import NavigationContext from '../../contexts/NavigationContext';

// const SidenavClose = ({ onNavClick }) => {
//   return (
//     <div className="drawer-close" role="button" onClick={() => onNavClick()}>
//       <div className="bar"></div>
//       <div className="bar"></div>
//     </div>
//   );
// };

const SidenavClose = ({ onNavClick }) => {
  const { onActiveChange } = useContext(NavigationContext);

  return (
    <div className="drawer-close" role="button" onClick={() => onNavClick()}>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export default SidenavClose;
