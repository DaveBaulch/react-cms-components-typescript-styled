import React from 'react';
import { useEffect } from 'react';
import lazyloadPicturefillBackground from 'lazyload-picturefill-background';
import ButtonLink from '../ButtonLink';
import './Cta.scss';
import useData from '../../hooks/useData';

const CTA = () => {
  const [data] = useData('data/hero-data.json');

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

  useEffect(() => {
    new lazyloadPicturefillBackground();
  }, [data]);  

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
