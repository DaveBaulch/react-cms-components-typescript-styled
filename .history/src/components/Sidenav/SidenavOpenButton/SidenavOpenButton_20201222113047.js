import React from 'react';
import { useEffect, useRef, useContext } from 'react';
import NavigationContext from '../../../contexts/NavigationContext';
import './SidenavOpenButton.scss';

const SidenavToggle = () => {
  const { isActive, onActiveChange } = useContext(NavigationContext);
  const buttonRef = useRef();

  useEffect(() => {
    if (!isActive) {
      buttonRef.current.focus();
    }
  }, [isActive]);

  return (
    <div>
      <button
        className="drawer-toggle"
        onClick={() => onActiveChange()}
        ref={buttonRef}
      >
        {/* TODO: <span class="sr-only">Open</span>*/}
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </div>
  );
};

export default SidenavToggle;
