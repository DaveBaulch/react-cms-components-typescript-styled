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

    // const logit = () => {
    //   setScrollY(window.pageYOffset);
    //   if (scrollY > 100) {
    //     buttonRef.current.classList.add('active');
    //   } else {
    //     buttonRef.current.classList.remove('active');
    //   }
    // };

    function watchKeyPress() {
      window.addEventListener('scroll', keyHandler, { passive: true });
    }
    watchKeyPress();
    // Remove listener (like componentWillUnmount)
    return () => {
      window.removeEventListener('scroll', keyHandler);
    };

  }, [isActive]);

  return (
    <button
      className="drawer-close"
      onClick={() => onActiveChange()}
      ref={buttonRef}
    >
      {/*TODO: <span className="sr-only">Close</span>*/}
      <div className="bar"></div>
      <div className="bar"></div>
    </button>
  );
};

export default SidenavClose;
