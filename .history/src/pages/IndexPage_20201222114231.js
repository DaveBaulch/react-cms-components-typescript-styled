import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const IndexPage = () => {
  useEffect(() => {
    document.title = 'Homepage';
  }, []);

  return (
    <div className="home">
      <div className="container">
        <h2>Components</h2>
       
      </div>
    </div>
  );
};

export default IndexPage;
