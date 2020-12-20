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
  const { state, onActiveChange } = useContext(NavigationContext);
  console.log(state);
  const buttonRef = useRef();

  useEffect(() => {
    //if (!state.isActive) {
    //console.log('here');
    //buttonRef.current.focus();
    //}
  }, []);

  return (
    <div>
      <div
        className="drawer-toggle"
        role="button"
        onClick={() => onActiveChange()}
        ref={buttonRef}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default SidenavToggle;
