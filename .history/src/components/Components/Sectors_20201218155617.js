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
        <h2 claswName="sectors-panel__title">{data.title}</h2>
        <div className="row">
          {data.sectors &&
            data.sectors.map((sector) => {
              return (
                <li className="card-list__item" key="sector.id">
                  <SectorsItem className="item" data={sector} />
                </li>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
