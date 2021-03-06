import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from './history';
import Header from './Global/Header';
import Footer from './Global/Footer';
import Main from './Global/Main';
import Sidenav from './Global/Sidenav';
import Hero from './Components/Hero';
import '../sass/base-styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }
  state = {
    navActive: false
  };

  onNavClick = () => {
    // console.log('clicked');
    this.setState({ navActive: !this.state.navActive });
    const wrapper = this.wrapperRef.current;
    wrapper.classList.toggle('nav-active');
  };

  render() {
    return (
      <div ref={this.wrapperRef} className="App">
        <Header onNavClick={this.onNavClick} />
        <Main>
          <Hero />
        </Main>
        <Sidenav navState={this.state.navActive} onNavClick={this.onNavClick} />
        <Footer />
      </div>
    );
  }
}

export default App;
