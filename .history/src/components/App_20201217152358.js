import React from 'react';
import Header from './Global/Header';
import Footer from './Global/Footer';
import Sidenav from './Global/Sidenav';
import '../sass/_base-styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }

  onNavClick = () => {
    console.log('clicked');
    const wrapper = this.wrapperRef.current;
    wrapper.classList.toggle('nav-active');
  };

  render() {
    return (
      <div ref={this.wrapperRef} className="App">
        <Header onNavClick={this.onNavClick} />
        {this.state.navActive && (
          <Sidenav
            navState={this.state.navActive}
            onNavClick={this.onNavClick}
          />
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
