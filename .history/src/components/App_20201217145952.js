import React from 'react';
import Header from './Global/Header';
import Footer from './Global/Footer';
import Sidenav from './Global/Sidenav';
import '../sass/_base-styles.scss';

class App extends React.Component {
  state = {
    navActive: false
  };

  onNavClick = () => {
    this.setState({ navActive: !this.state.navActive });
  };

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.navActive && 
          <Sidenav navState={this.state.navActive} onNavClick={this.onNavClick} />
        }
        <Footer />
      </div>
    );
  }
}

export default App;
