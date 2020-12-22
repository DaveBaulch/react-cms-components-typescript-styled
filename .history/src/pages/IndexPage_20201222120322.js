import React from 'react';
import { useEffect } from 'react';
import Navigation from '../components/Navigation';

const IndexPage = () => {
  useEffect(() => {
    document.title = 'Homepage';
  }, []);

  return (
    <div className="home">
      <div className="container">
        <h2>Components</h2>
        <Navigation />
      </div>
    </div>
  );
};

export default IndexPage;
