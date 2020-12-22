import React from 'react';
import './Quote.scss';
import useData from '../../hooks/useData';
import Spinner from '../Spinner';

const Quote = () => {
  const [data, isLoading, isError] = useData('data/quote-data.json');
  const { text, author, jobTitle } = data;

  return (
    <div className="section quote-block">
      <div className="container">
        <div className="row">
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
        </div>
      </div>
    </div>
  );
};

export default Quote;
