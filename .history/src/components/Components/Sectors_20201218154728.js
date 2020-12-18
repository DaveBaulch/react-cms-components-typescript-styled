import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../sass/components/_sectors.scss';

const Sectors = () => {
  const [data, setData] = useState([]);

  const getData = async () => c{
    const { data } = await axios.get('data/sectors-data.json');
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

return (
    <section class="sectors-panel" v-if="blockData">

    <div class="container">

      <h2 class="sectors-panel__title">{{ blockData.title }}</h2>

      <div class="row">

        <AppSectorsItem v-for="item in blockData.data" :key="item.id" :itemData="item" />

      </div>

    </div>

  </section>  

  );
};

export default Sectors;
