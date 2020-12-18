import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Text = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get('data/text-data.json');
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    
        

  )
    
};

export default Text;
