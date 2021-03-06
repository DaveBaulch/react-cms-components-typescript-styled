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

  useEffect(() => {
    if (isActive) {
      buttonRef.current.focus();
    }
  }, [isActive]);

  return (
    <button
      className="drawer-close"
      onClick={() => onActiveChange()}
      ref={buttonRef}
    > <span class="sr">Cloe</span>
      <div className="bar"></div>
      <div className="bar"></div>
    </button>
  );
};

export default SidenavClose;
