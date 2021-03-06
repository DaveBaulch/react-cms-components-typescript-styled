import React from 'react';
import { useEffect } from 'react';
import Cards from '../components/Components/Cards';

const CardsPage = () => {
  useEffect(() => {
    document.title = 'Cards page';
  }, []);

  return (
    <React.Fragment>
      <h1>Cards</h1>
      <Cards />
    </React.Fragment>
  );
};

export default CardsPage;
