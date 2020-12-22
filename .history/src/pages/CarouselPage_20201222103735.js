import React from 'react';
import { useEffect } from 'react';
import Carousel from '../components/Carousel';

const HeroPage = () => {
  useEffect(() => {
    document.title = 'Carousel page';
  }, []);

  return (
    <React.Fragment>
      <h1>Carousel</h1>
      <Carousel />
    </React.Fragment>
  );
};

export default HeroPage;
