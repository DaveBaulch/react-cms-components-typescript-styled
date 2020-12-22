import React from 'react';
import { useEffect } from 'react';
import lazyloadPicturefillBackground from 'lazyload-picturefill-background';
import ButtonLink from '../ButtonLink';
import './Cta.scss';
import useData from '../../hooks/useData';
import Spinner from '../Spinner';

const CTA = () => {
  const [data, isLoading, isError] = useData('data/cta-data.json');

  useEffect(() => {
    if (data) {
      new lazyloadPicturefillBackground();
    }
  }, [data, isLoading, isError]);

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

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <div className="loading-error">
        <p>Oops - something went wrong ...</p>
      </div>
    );
  }

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
