import React from 'react';
import Header from './Global/Header';
import Footer from './Global/Footer';
import SidenavToggle from './Global/SidenavToggle';
import '../sass/_base-styles.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header>
          <SidenavToggle />
        </Header>
        <Footer />
      </div>
    );
  }
}

export default App;
