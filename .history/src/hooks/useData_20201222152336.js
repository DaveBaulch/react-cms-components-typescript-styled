import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = (query) => {
  const [data, setData] = useState([]);

  const getData = async (query) => {
    const { data } = await axios.get(query);
    setData(data);
  };

  useEffect(() => {
    getData(query);
  });

  return {data, getData];
};

export default useData;
