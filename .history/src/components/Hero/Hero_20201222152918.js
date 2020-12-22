import React from 'react';
import { useState, useEffect } from 'react';
// import axios from 'axios';
// import lazyloadPicturefillBackground from 'lazyload-picturefill-background';
import './Hero.scss';
import useData from '../../hooks/useData';

const Hero = () => {
  const [data, getData] = useData('data/hero-data.json');
  console.log(data);
  // const [data, setData] = useState([]);

  // const getData = async () => {
  //   const { data } = await axios.get('data/hero-data.json');
  //   setData(data);
  //   new lazyloadPicturefillBackground();
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  useEffect(() => {
    getData();
  }, []);

  const { imgSrc1, imgSrc2, imgSrc3, imgSrc4, title, text } = data;

  return (
    <article className="section banner-block">
      <div className="banner">
        <div className="banner__background picturefill-background is-lazy">
          <span
            className="picturefill-background-source"
            data-src={imgSrc1}
          ></span>
          <span
            className="picturefill-background-source"
            data-src={imgSrc2}
            data-media="(min-width: 576px)"
          ></span>
          <span
            className="picturefill-background-source"
            data-src={imgSrc3}
            data-media="(min-width: 768px)"
          ></span>
          <span
            className="picturefill-background-source"
            data-src={imgSrc4}
            data-media="(min-width: 992px)"
          ></span>
        </div>

        <div className="container">
          <div className="banner__content">
            <div className="banner__inner">
              <h1 className="banner__heading">{title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: text
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
