import React from 'react';
import { useEffect, useState } from 'react';
import './Spinner.scss';

const Spinner = ({ message = 'Loading...' }) => {
  const [loading, setLoading] = useState(false);

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
