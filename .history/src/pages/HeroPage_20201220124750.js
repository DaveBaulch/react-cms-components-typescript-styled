import React from 'react';
import { useEffect } from 'react';
import Hero from '../components/Components/Hero';

const HeroPage = () => {
  useEffect(() => {
    document.title = 'Hero page';
  }, []);

  return (
    <React.Fragment>
      <h1>Hero</h1>
      <Hero />
    </React.Fragment>
  );
};

export default HeroPage;
