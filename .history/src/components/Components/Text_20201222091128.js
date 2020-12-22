import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../sass/components/_text.scss';

const Text = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get('data/text-data.json');
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const { text }

  return (
    <div className="section text-block">
      <div className="container">
        <div className="row">
          <div
            className="wysiwyg"
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
