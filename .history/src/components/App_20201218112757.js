import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from '../history';
import Header from './Global/Header';
import Footer from './Global/Footer';
import Main from './Global/Main';
import Sidenav from './Global/Sidenav';
import IndexPage from '../pages/IndexPage';
import HeroPage from '../pages/HeroPage';
import CarouselPage from '../pages/CarouselPage';
import SectorsPage from '../pages/SectorsPage';
import CardsPage from '../pages/CardsPage';
import CTAPage from '../pages/CTAPage';
import TextPage from '../pages/TextPage';
import AccordionPage from '../pagesPage';

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
        <Router history={createBrowserHistory}>
          <Header onNavClick={this.onNavClick} />

          <Main>
            <Switch>
              <Route path="/" exact component={IndexPage} />
              <Route path="/hero" exact component={HeroPage} />
              <Route path="/carousel" exact component={CarouselPage} />
              <Route path="/hero" exact component={HeroPage} />
              <Route path="/hero" exact component={HeroPage} />
              <Route path="/hero" exact component={HeroPage} />
              <Route path="/hero" exact component={HeroPage} />
            </Switch>
          </Main>

          <Sidenav
            navState={this.state.navActive}
            onNavClick={this.onNavClick}
          />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
