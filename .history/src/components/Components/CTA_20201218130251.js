import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import lazyloadPicturefillBackground from 'lazyload-picturefill-background';
import '../../sass/components/_cta.scss';

const CTA = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get('data/cta-data.json');
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    
  )
};

export default CTA;
