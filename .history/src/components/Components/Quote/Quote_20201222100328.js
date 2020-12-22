import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Qquote.scss';

const Quote = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get('data/quote-data.json');
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

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
