import React from 'react';
import { useEffect } from 'react';
imoprt { }

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
