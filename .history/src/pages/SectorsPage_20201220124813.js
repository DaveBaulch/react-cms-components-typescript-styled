import React from 'react';
import { useEffect } from 'react';
import Sectors from '../components/Components/Sectors';

const SectorsPage = () => {
  useEffect(() => {
    document.title = 'Cards page';
  }, []);

  return (
    <React.Fragment>
      <h1>Sectors</h1>
      <Sectors />
    </React.Fragment>
  );
};

export default SectorsPage;
