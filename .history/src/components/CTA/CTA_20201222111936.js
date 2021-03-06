import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import lazyloadPicturefillBackground from 'lazyload-picturefill-background';
import BaseButtonLink from '../ButtonLink/ButtonLink';
import './Cta.scss';

const CTA = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get('data/cta-data.json');
    setData(data);
    new lazyloadPicturefillBackground();
  };

  useEffect(() => {
    getData();
  }, []);

  const {
    imgSrc1,
    imgSrc2,
    imgSrc3,
    imgSrc4,
    title,
    text,
    href,
    btnText
  } = data;

  return (
    <article className="section cta-block">
      <div className="cta">
        <div className="cta__background picturefill-background is-lazy">
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
          <div className="cta__content">
            <h1 className="cta__title">{title}</h1>
            <div
              className="cta__text"
              dangerouslySetInnerHTML={{
                __html: text
              }}
            ></div>
            <ButtonLink href={href} variant={'cta__btn'}>
              {btnText}
            </ButtonLink>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CTA;
