import React from 'react';
import { useState } from 'react';
import Header from './Global/Header';
import Footer from './Global/Footer';
import Sidenav from './Global/Sidenav';
import '../sass/_base-styles.scss';

const App = () => {
  const [navActive, setNavActive] = useState(false);

  onNavSelect = (video) => {
    console.log('From the app!', video);
    this.setState({ selectedVideo: video });
  };

  return (
    <div className="App">
      <Header />
      <Sidenav
        navActive={navActive}
        onVideoSelect={(video) => setSelectedVideo(video)}
      />
      <Footer />
    </div>
  );
};

export default App;
