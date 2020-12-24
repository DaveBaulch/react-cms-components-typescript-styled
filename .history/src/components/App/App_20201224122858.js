import React from 'react';
import {useRef} from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from '../../history';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import Sidenav from '../Sidenav';
import SkipLink from '../SkipLink';
import ScrollTopButton from '../ScrollTopButton';
import IndexPage from '../../pages/IndexPage';
import HeroPage from '../../pages/HeroPage';
import CarouselPage from '../../pages/CarouselPage';
import SectorsPage from '../../pages/SectorsPage';
import CardsPage from '../../pages/CardsPage';
import CTAPage from '../../pages/CTAPage';
import QuotePage from '../../pages/QuotePage';
import TextPage from '../../pages/TextPage';
import { NavigationStore } from '../../contexts/NavigationContext';

import '../../sass/base-styles.scss';

class App extends React.Component {
  constructor(props) {

  const wrapperRef = useRef();

  render() {
    return (
      <NavigationStore>
        <div ref={this.wrapperRef} className="App">
          <Router history={createBrowserHistory}>
            <SkipLink>Skip navigation</SkipLink>
            <Header />

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

            <Sidenav />

            <Footer />

            <ScrollTopButton>
              <img src="images/svg/chevron-up-white.svg" alt="Back to top" />
              <span className="sr-only">Back to top</span>
            </ScrollTopButton>
          </Router>
        </div>
      </NavigationStore>
    );
  }
}

export default App;
