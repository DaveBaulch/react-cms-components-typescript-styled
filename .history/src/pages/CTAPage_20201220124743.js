import React from 'react';
import { useEffect } from 'react';
import CTA from '../components/Components/CTA';

const CTAPage = () => {
  useEffect(() => {
    document.title = 'CTA page';
  }, []);

  return (
    <React.Fragment>
      <h1>CTA</h1>
      <CTA />
    </React.Fragment>
  );
};

export default CTAPage;
