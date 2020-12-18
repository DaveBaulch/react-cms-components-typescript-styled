import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from '../components/Components/Cards';

const CardsPage = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get('data/cards-data.json');
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <h1>Cards</h1>
      {data && (
        <Cards data={data} />
      }
    </React.Fragment>
  );
};

export default CardsPage;
