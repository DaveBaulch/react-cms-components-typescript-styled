import React from 'react';
import { useEffect, useRef, useContext } from 'react';
import NavigationContext from '../../contexts/NavigationContext';

// const SidenavClose = ({ onNavClick }) => {
//   return (
//     <div className="drawer-close" role="button" onClick={() => onNavClick()}>
//       <div className="bar"></div>
//       <div className="bar"></div>
//     </div>
//   );
// };

const SidenavClose = () => {
  const { isActive, onActiveChange } = useContext(NavigationContext);
  const buttonRef = useRef();
  console.log('here2' + isActive);

  useEffect(() => {
    if (isActive) {
      console.log('here' + isActive);
      buttonRef.current.focus();
    }
  }, [isActive]);

  return (
    <div
      className="drawer-close"
      role="button"
      onClick={() => onActiveChange()}
      ref={buttonRef}
    >
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export default SidenavClose;
