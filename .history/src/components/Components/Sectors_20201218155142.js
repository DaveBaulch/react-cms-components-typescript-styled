import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
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
    <section class="sectors-panel">
      <div class="container">
        <h2 class="sectors-panel__title">{data.title}</h2>
        <div class="row">
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
