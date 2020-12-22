import React from 'react';
import './Spinner.scss';

const Spinner = ({ message = 'Loading...' }) => {
  
  useEffect(() => {
    if (data) {
      new lazyloadPicturefillBackground();
    }
  }, [data, isLoading, isError]);
  
  return (
    <div className="spinner-background">
      <div className="spinner">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Spinner;
