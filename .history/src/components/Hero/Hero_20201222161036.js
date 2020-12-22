import React from 'react';
// import { useEffect, useState } from 'react';
// import axios from 'axios'; // moved to custom hook
import { useEffect } from 'react';
import lazyloadPicturefillBackground from 'lazyload-picturefill-background';
import './Hero.scss';
import useData from '../../hooks/useData';

const Hero = () => {
  // console.log(data);

  // moved to custom hook
  // const [data, setData] = useState([]);

  // const getData = async () => {
  //   const { data } = await axios.get('data/hero-data.json');
  //   setData(data);
  //   new lazyloadPicturefillBackground();
  // };

  const [data, isLoading, isError] = useData('data/hero-data.json');

  comsole.log(data + isLoading + isError);

  useEffect(() => {
    new lazyloadPicturefillBackground();
  }, [data]);

  const { imgSrc1, imgSrc2, imgSrc3, imgSrc4, title, text } = data;

  return (
    { isError && (<div>Something went wrong ...</div>) }
    
    {
      isLoading ? (
        <div>Loading ...</div>
      ) : (
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
      )
    }
  );
};

export default Hero;
