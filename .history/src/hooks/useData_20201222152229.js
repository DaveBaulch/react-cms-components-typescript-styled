import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = (query) => {

  const [data, setData] = useState([]);

  const getData = async (query) => {
    const { data } = await axios.get();
    setData(data);
  };

  useEffect(() => {
    getData(query);
  }, []);

};

export default useData;
