import React from 'react';
import { useEffect } from 'react';
import Text from '../components/Text';

const TextPage = () => {
  useEffect(() => {
    document.title = 'Text component page';
  }, []);

  return (
    <React.Fragment>
      <h1>Text</h1>
      <Text />
    </React.Fragment>
  );
};

export default TextPage;
