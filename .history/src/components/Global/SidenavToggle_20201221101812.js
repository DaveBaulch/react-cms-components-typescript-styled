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
      buttonRef.current.focus();
    }
  }, [isActive]);


  const onClick = () => {
    window.scrollTo(0, 0);
  };  

  return (
    <div>
      <button
        className="drawer-toggle"
        onClick={() => onActiveChange()}
        ref={buttonRef}
      >
        {/* TODO: <span class="sr-only">Open</span>*/}
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
    </div>
  );
};

export default SidenavToggle;
