import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
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
          {data.cards &&
            data.cards.map((card) => {
              return (
                <li className="card-list__item" key="card.id">
                  <Card className="item" card={card} />
                </li>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
