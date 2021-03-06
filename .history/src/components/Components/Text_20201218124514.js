import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../sass/components/_hero.scss';

const Text = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get('data/text-data.json');
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div class="section text-block">
      <div class="container">
        <div class="row">
          <div
            class="wysiwyg"
            dangerouslySetInnerHTML={{
              __html: data.text
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Text;
