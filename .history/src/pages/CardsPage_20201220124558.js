import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Cards from '../components/Components/Cards';

const CardsPage = () => {
  useEffect(() => {
    getData();
  }, []);  
  
  return (
    <React.Fragment>
      <h1>Cards</h1>
      <Cards />
    </React.Fragment>
  );
};

export default CardsPage;
