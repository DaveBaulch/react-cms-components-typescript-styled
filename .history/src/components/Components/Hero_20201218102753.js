import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import lazyloadPicturefillBackground from 'lazyload-picturefill-background';
import '../../sass/components/_hero.scss';

const Hero = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get('data/hero-data.json');
    setData(data);
  };

  useEffect(() => {
    getData();
    new lazyloadPicturefillBackground();
  }, [data]);

  return (
    <article className="section banner-block">
      <div className="banner">
        <div className="banner__background picturefill-background is-lazy">
          <span
            className="picturefill-background-source"
            data-src={data.imgSrc1}
          ></span>
          <span
            className="picturefill-background-source"
            data-src={data.imgSrc2}
            data-media="(min-width: 576px)"
          ></span>
          <span
            className="picturefill-background-source"
            src={data.imgSrc3}
            data-media="(min-width: 768px)"
          ></span>
          <span
            className="picturefill-background-source"
            src={data.imgSrc4}
            data-media="(min-width: 992px)"
          ></span>
        </div>

        <div className="container">
          <div className="banner__content">
            <div className="banner__inner">
              <h1 className="banner__heading">{data.title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.text
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Hero;
