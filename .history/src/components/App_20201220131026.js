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
import QuotePage from '../pages/QuotePage';
import TextPage from '../pages/TextPage';
import NavigationStore from '../contexts/NavigationContext';

import '../sass/base-styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }
  state = {
    navActive: falsethis.context.onLanguageChange('english')}
  };

  onNavClick = () => {
    // console.log('clicked');
    this.setState({ navActive: !this.state.navActive });
    const wrapper = this.wrapperRef.current;
    wrapper.classList.toggle('nav-active');
  };

  render() {
    return (
      <NavigationContext>
        <div ref={this.wrapperRef} className="App">
          <Router history={createBrowserHistory}>
            <Header onNavClick={this.onNavClick} />

            <Main>
              <Switch>
                <Route path="/" exact component={IndexPage} />
                <Route path="/hero" exact component={HeroPage} />
                <Route path="/carousel" exact component={CarouselPage} />
                <Route path="/sectors" exact component={SectorsPage} />
                <Route path="/cards" exact component={CardsPage} />
                <Route path="/cta" exact component={CTAPage} />
                <Route path="/quote" exact component={QuotePage} />
                <Route path="/text" exact component={TextPage} />
              </Switch>
            </Main>

            <Sidenav
              navState={this.state.navActive}
              onNavClick={this.onNavClick}
            />
            <Footer />
          </Router>
        </div>
      </NavigationContext>
    );
  }
}

export default App;
