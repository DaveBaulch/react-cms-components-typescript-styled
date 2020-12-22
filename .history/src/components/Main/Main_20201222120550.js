import React from 'react';
import './main.scss';

const Main = ({ children }) => {
  return (
    <main id="main" className="main">
      {children}
    </main>
  );
};

export default Main;
