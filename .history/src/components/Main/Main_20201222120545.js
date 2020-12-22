import React from 'react';
import './Hero.scss';

const Main = ({ children }) => {
  return (
    <main id="main" className="main">
      {children}
    </main>
  );
};

export default Main;
