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
  console.log('?' + isActive);
  const buttonRef = useRef();

  useEffect(() => {
    if (!isActive) {
      console.log('here');
      buttonRef.current.focus();
    }
  }, [isActive]);

  return (
    <div>
      <button
        className="drawer-toggle"
        role="button"
        onClick={() => onActiveChange()}
        ref={buttonRef}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
    </div>
  );
};

export default SidenavToggle;
