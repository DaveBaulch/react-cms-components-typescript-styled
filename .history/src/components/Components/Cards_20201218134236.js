import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../sass/components/_quote.scss';

const Quote = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get('data/quote-data.json');
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

const Cards = () => {
  return <React.Fragment>Cards</React.Fragment>;
};

export default Cards;
