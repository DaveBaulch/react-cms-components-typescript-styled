import React from 'react';
import { useEffect, useRef, useContext } from 'react';
import NavigationContext from '../../../contexts/NavigationContext';
import './SidenavCloseButton.scss';
import breakpoints from '../../../config/breakpoints';

const SidenavClose = () => {
  const { isActive, onActiveChange } = useContext(NavigationContext);
  const buttonRef = useRef();

  console.log()

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
        window.innerWidth < breakpoints.md
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
