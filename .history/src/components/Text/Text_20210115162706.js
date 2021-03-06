import React from 'react';
import './Text.scss';
import useData from '../../hooks/useData';
import Spinner from '../Spinner';
import Container from '../Container';
import Row from '../Row';

const Text = () => {
  const [data, isLoading, isError] = useData('data/text-data.json');
  const { text } = data;

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <div className="loading-error">
        <p>Oops - something went wrong ...</p>
      </div>
    );
  }

  return (
    <div className="section text-block">
      <Container>
        <Row>
          <div
            className="wysiwyg"
            dangerouslySetInnerHTML={{
              __html: text
            }}
          ></div>
        </Row>
      </Container>
    </div>
  );
};

export default Text;
