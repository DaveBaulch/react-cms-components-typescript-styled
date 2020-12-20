import React from 'react';
import { useEffect, useRef, useContext } from 'react';
import NavigationContext from '../../contexts/NavigationContext';

const Main = (props) => {

  return (
    <main id="main" className="main" tabIndex={ isActive ? -1 : 0}>
      {props.children}
    </main>
  );
};

export default Main;
