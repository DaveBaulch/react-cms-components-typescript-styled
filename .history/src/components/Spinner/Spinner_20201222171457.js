import React from 'react';
import { useEffect, useState } from 'react';
import './Spinner.scss';
import SpinnerIcon from '../Spinner'

const Spinner = ({ message = 'Loading...' }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, [loading]);

  return (
    <div className={`spinner-background ${loading ? 'loading' : ''}`}>
      <div className="spinner">
        <Spinner />
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Spinner;
