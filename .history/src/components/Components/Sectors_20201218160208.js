import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SectorsItem from './SectorsItem';
import '../../sass/components/_sectors.scss';

const Sectors = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get('data/sectors-data.json');
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="sectors-panel">
      <div className="container">
        <h2 className="sectors-panel__title">{data.title}</h2>
        <div className="row">
          {data.sectors &&
            data.sectors.map((sector,index) => {
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
