import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SectorsItem from './SectorsItem';
import '../../sass/components/_sectors.scss';
import lazyloadPicturefillBackground from 'lazyload-picturefill-background';

const Sectors = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get('data/sectors-data.json');
    setData(data);
    new lazyloadPicturefillBackground();
  };

  useEffect(() => {
    getData();
  }, []);

  const { title, sectors } = data;

  return (
    <section className="sectors-panel">
      <div className="container">
        <h2 className="sectors-panel__title">{title}</h2>
        <div className="row">
          {sectors &&
            data.sectors.map((sector) => {
              return (
                <SectorsItem className="item" data={sector} key={sector.id} />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
