import React from 'react';
import { useEffect } from 'react';
import Hero from '../components/Hero';

const HeroPage = () => {
  useEffect(() => {
    document.title = 'Hero component page';
  }, []);

  return (
    <React.Fragment>
      <h1>Hero</h1>
      <Hero />
    </React.Fragment>
  );
};

export default HeroPage;
