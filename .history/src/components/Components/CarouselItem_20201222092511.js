import React from 'react';
import '../../sass/components/_carousel-item.scss';

const CarouselItem = ({ imgSrc1, imgSrc2, imgSrc3, imgSrc1 }) => {
  return (
    <article className="carousel__item">
      <div className="carousel__wrapper">
        <div className="carousel__background picturefill-background is-lazy">
          <span
            className="picturefill-background-source"
            data-src={item.imgSrc1}
          ></span>
          <span
            className="picturefill-background-source"
            data-src={item.imgSrc2}
            data-media="(min-width: 576px)"
          ></span>
          <span
            className="picturefill-background-source"
            data-src={item.imgSrc3}
            data-media="(min-width: 768px)"
          ></span>
          <span
            className="picturefill-background-source"
            data-src={item.imgSrc4}
            data-media="(min-width: 992px)"
          ></span>
        </div>

        <div className="container">
          <div className="carousel__content">
            <h2 className="carousel__heading">{item.title}</h2>
            <div
              className="carousel__body"
              dangerouslySetInnerHTML={{
                __html: item.text
              }}
            ></div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CarouselItem;
