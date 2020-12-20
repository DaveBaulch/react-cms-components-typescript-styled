import React from 'react';
import { useEffect, useRef, useContext } from 'react';
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

const SidenavToggle = () => {
  const { isActive, onActiveChange } = useContext(NavigationContext);
  const buttonRef = useRef();

  useEffect(() => {
    if (!isActive) {
      console.log('there' + isActive);
      buttonRef.current.focus();
    }
  }, [isActive]);

  return (
    <div>
      <div
        className="drawer-toggle"
        role="button"
        onClick={() => onActiveChange()}
        ref={buttonRef}
        tabIndex="-1"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default SidenavToggle;
