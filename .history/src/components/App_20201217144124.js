import React from 'react';
import Header from './Global/Header';
import Footer from './Global/Footer';
import Sidenav from './Global/Sidenav';
import '../sass/_base-styles.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidenav />
        <Footer />
      </div>
    );
  }
}

export default App;
