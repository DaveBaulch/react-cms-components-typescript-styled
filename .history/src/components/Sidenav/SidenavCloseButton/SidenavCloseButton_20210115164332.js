import React from 'react';
import { useEffect, useRef, useContext } from 'react';
import NavigationContext from '../../../contexts/NavigationContext.js';
import './SidenavCloseButton.scss';
import Breakpoints from '../../../config/Breakpoints';

const SidenavClose = () => {
  const { isActive, onActiveChange } = useContext(NavigationContext);
  const buttonRef = useRef();

  useEffect(() => {
    if (isActive) {
      buttonRef.current.focus();
    }
  }, [isActive]);

  useEffect(() => {
    const keyHandler = (event) => {
      if (
        isActive &&
        event.keyCode === 27 &&
        window.innerWidth < Breakpoints.md
      ) {
        onActiveChange();
      }
    };

    function watchKeyPress() {
      window.addEventListener('keydown', keyHandler);
    }
    watchKeyPress();
    return () => {
      window.removeEventListener('keydown', keyHandler);
    };
  });

  return (
    <button
      className="drawer-close"
      onClick={() => onActiveChange()}
      ref={buttonRef}
    >
      {/*TODO: <span className="sr-only">Close</span>*/}
      <span className="bar"></span>
      <span className="bar"></span>
    </button>
  );
};

export default SidenavClose;
