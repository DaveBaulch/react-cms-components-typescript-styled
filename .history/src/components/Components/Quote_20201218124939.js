import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../sass/components/_quote.scss';

const Quote = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get('data/quote-data.json');
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="section quote-block">
      <div className="container">
        <div className="row">
          <blockquote className="quote">
            <span className="quote__text"></span>
            <div
              class="wysiwyg"
              dangerouslySetInnerHTML={{
                __html: data.text
              }}
            ></div>
            <cite>
              <span className="quote__author">{data.author}</span>
              <span>, </span>
              <span className="quote__job-title">{data.jobTitle}</span>
            </cite>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Quote;
