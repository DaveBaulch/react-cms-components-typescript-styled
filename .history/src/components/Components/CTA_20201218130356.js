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
    <article className="section cta-block">
    <div className="cta">
      <div className="cta__background picturefill-background is-lazy">
        <span
          className="picturefill-background-source"
          src="blockData.imgSrc1"
        ></span>
        <span
          class="picturefill-background-source"
          src="blockData.imgSrc2"
          data-media="(min-width: 576px)"
        ></span>
        <span
          className="picturefill-background-source"
          src="blockData.imgSrc3"
          data-media="(min-width: 768px)"
        ></span>
        <span
          className="picturefill-background-source"
          src="blockData.imgSrc4"
          data-media="(min-width: 992px)"
        ></span>
      </div>

      <div className="container">
        <div className="cta__content">
          <h1 className="cta__title">{ data.title }</h1>
          <div v-html="blockData.text" class="cta__text"></div>
          <BaseLink
            text="blockData.btnText"
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
