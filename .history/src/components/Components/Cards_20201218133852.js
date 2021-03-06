import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../sass/components/_cards.scss';

const Cards = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
      const { data } = await axios.get('data/cta-data.json');
      setData(data);
      new lazyloadPicturefillBackground();
    };

    useEffect(() => {
      getData();
    }, []);
  return <React.Fragment>Cards</React.Fragment>;
};

export default Cards;
