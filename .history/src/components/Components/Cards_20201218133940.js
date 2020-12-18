import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Cards = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get('data/cta-cards.json');
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <React.Fragment>Cards</React.Fragment>;
};

export default Cards;
