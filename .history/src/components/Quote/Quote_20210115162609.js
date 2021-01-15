import React from 'react';
import './Quote.scss';
import useData from '../../hooks/useData';
import Spinner from '../Spinner';
import Container from '../Container';
import Container from '../Container';

const Quote = () => {
  const [data, isLoading, isError] = useData('data/quote-data.json');
  const { text, author, jobTitle } = data;

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
    <div className="section quote-block">
      <Container>
        <Row>
          <blockquote className="quote">
            <span
              className="quote__text"
              dangerouslySetInnerHTML={{
                __html: text
              }}
            ></span>
            <cite>
              <span className="quote__author">{author}</span>
              {author && jobTitle && <span>, </span>}
              {jobTitle && <span className="quote__job-title">{jobTitle}</span>}
            </cite>
          </blockquote>
        </Row>
      </Container>
    </div>
  );
};

export default Quote;
