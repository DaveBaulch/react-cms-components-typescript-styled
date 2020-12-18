import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../sass/components/_cardsscss';

const Cards = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get('data/cards-data.json');
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

const Cards = () => {
  return <React.Fragment>Cards</React.Fragment>;
};

export default Cards;
