import React from 'react';

const ScrollTopButton = () => {
  const { isActive, onActiveChange } = useContext(NavigationContext);
  const buttonRef = useRef();

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

export default ScrollTopButton;

