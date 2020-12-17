import React from 'react';
import { useState } from 'react';
import Header from './Global/Header';
import Footer from './Global/Footer';
import Sidenav from './Global/Sidenav';
import '../sass/_base-styles.scss';

const App = () => {class App extends React.Component {
render() {
  return (
    <div className="App">
      <Header />
      <Sidenav navActive={navActive} onNavClick={this.onNavClick} />
      <Footer />
    </div>
  );
};

export default App;
