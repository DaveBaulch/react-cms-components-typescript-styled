import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = (query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async (query) => {
    setIsError(false);
    setIsLoading(true);

    try {
      const { data } = await axios.get(query);
      setTimeout(() => {
        setData(data);  
      }, timeout);
      
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getData(query);
  }, [query]);

  return [data, isLoading, isError, getData];
};

export default useData;
