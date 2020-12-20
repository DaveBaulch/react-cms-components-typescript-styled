import React from 'react';
import { useEffect } from 'react';
import Quote from '../components/Components/Quote';

const QuotePage = () => {
  useEffect(() => {
    document.title = 'Quote page';
  }, []);

  return (
    <React.Fragment>
      <h1>Quote</h1>
      <Quote />
    </React.Fragment>
  );
};

export default QuotePage;
