import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../sass/components/_sectors.scss';

const Sectors = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get('data/hero-data.json');
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);
  
  return <React.Fragment>Sectors</React.Fragment>;
};

export default Sectors;
