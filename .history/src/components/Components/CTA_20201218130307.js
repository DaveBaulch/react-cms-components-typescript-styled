import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import lazyloadPicturefillBackground from 'lazyload-picturefill-background';
import '../../sass/components/_cta.scss';

const CTA = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get('data/cta-data.json');
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <article class="section cta-block" v-if="blockData">
    <div class="cta">
      <div class="cta__background picturefill-background is-lazy">
        <span
          class="picturefill-background-source"
          :data-src="blockData.imgSrc1"
        ></span>
        <span
          class="picturefill-background-source"
          :data-src="blockData.imgSrc2"
          data-media="(min-width: 576px)"
        ></span>
        <span
          class="picturefill-background-source"
          :data-src="blockData.imgSrc3"
          data-media="(min-width: 768px)"
        ></span>
        <span
          class="picturefill-background-source"
          src="blockData.imgSrc4"
          data-media="(min-width: 992px)"
        ></span>
      </div>

      <div class="container">
        <div class="cta__content">
          <h1 class="cta__title">{ data.title }</h1>
          <div v-html="blockData.text" class="cta__text"></div>
          <BaseLink
            :text="blockData.btnText"
            to="/about"
            type="router-link"
            v-if="blockData"
            class="cta__btn"
          />
        </div>
      </div>
    </div>
  </article>
  )
};

export default CTA;
