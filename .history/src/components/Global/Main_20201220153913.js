import React from 'react';
import { useEffect, useRef, useContext } from 'react';
import NavigationContext from '../../contexts/NavigationContext';

const Main = (props) => {
  return (
    <main id="main" className="main" tabIndex=>
      {props.children}
    </main>
  );
};

export default Main;
