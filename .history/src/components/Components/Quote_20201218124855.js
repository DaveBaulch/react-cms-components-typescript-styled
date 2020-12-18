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
    <div class="section quote-block">
      <div class="container">
        <div class="row">
          <blockquote class="quote">
            <span class="quote__text"></span>
            <cite>
              <span class="quote__author">{data.author }</span>
              <span v-if="hasComma">, </span>
              <span class="quote__job-title">{{ data.jobTitle }}</span>
            </cite>
          </blockquote>
        </div>
      </div>
    </div>    
  );
};

export default Quote;
