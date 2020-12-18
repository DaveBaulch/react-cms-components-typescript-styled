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
            <span v-html="blockData.text" class="quote__text"></span>
            <cite>
              <span v-if="hasAuthor" class="quote__author">{{ data.author }}</span>
              <span v-if="hasComma">, </span>
              <span v-if="hasJobTitle" class="quote__job-title">{{ blockData.jobTitle }}</span>
            </cite>
          </blockquote>
        </div>
      </div>
    </div>    
  );
};

export default Quote;
