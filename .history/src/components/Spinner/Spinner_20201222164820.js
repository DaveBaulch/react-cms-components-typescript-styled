import React from 'react';
import { useEffect, useState } from 'react';
import './Spinner.scss';

const Spinner = ({ message = 'Loading...' }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    
  });

  return (
    <div className="spinner-background">
      <div className="spinner">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Spinner;
