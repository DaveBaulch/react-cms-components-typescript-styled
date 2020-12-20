import React from 'react';
import { useEffect, useRef, useContext } from 'react';
import NavigationContext from '../../contexts/NavigationContext';

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
    >
      <div className="bar"></div>
      <div className="bar"></div>
    </button>
  );
};

export default SidenavClose;

