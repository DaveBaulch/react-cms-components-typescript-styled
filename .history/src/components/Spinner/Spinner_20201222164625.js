import React from 'react';
import './Spinner.scss';

const Spinner = ({ message = 'Loading...' }) => {

  useEffect(() => {

  }, []);
  
  return (
    <div className="spinner-background">
      <div className="spinner">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Spinner;
