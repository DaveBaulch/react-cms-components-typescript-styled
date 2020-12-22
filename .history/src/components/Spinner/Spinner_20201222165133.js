import React from 'react';
import { useEffect, useState } from 'react';
import './Spinner.scss';

const Spinner = ({ message = 'Loading...' }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(true);
  }, [data]);

  return (
    <div className={`spinner-background loading`}>
      <div className="spinner">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Spinner;
