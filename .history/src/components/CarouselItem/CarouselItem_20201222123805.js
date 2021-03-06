import React from 'react';
import './CarouselItem.scss';

const CarouselItem = ({
  item: { imgSrc1, imgSrc2, imgSrc3, imgSrc4, title, text }
}) => {
  return (
    <article className="carousel__item">
      <div className="carousel__wrapper">
        <div className="carousel__background picturefill-background is-lazy">
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
          <div className="carousel__content">
            <h2 className="carousel__heading">{title}</h2>
            <div
              className="carousel__body"
              dangerouslySetInnerHTML={{
                __html: text
              }}
            ></div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CarouselItem;
