
import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = () => {

  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get('data/hero-data.json');
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

};

export default useData;
