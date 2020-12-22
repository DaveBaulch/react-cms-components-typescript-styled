import React from 'react';
import { useEffect, useState } from 'react';
import './Spinner.scss';
import SpinnerIcon from '../SpinnerIcon';

const Spinner = ({ message = 'Loading...' }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, [loading]);

  return (
    <div className="spinner-background`}>
      <div className="spinner">
        <SpinnerIcon />
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Spinner;
