import React from 'react';
import { useState } from 'react';
import Header from './Global/Header';
import Footer from './Global/Footer';
import Sidenav from './Global/Sidenav';
import '../sass/_base-styles.scss';

const App = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <div className="App">
      <Header />
      <Sidenav navActive />
      <Footer />
    </div>
  );
};

export default App;
