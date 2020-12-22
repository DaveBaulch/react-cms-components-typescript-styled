import React from 'react';
import { useEffect } from 'react';
import Quote from '../components/Quote';

const QuotePage = () => {
  useEffect(() => {
    document.title = 'Quote component page';
  }, []);

  return (
    <React.Fragment>
      <h1>Quote</h1>
      <Quote />
    </React.Fragment>
  );
};

export default QuotePage;
