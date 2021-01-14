import React from 'react';
import PropTypes from 'prop-types';
import './Main.scss';

const Main = ({ children }) => (
  <main id="main" className="main">
    {children}
  </main>
);

export default Main;
