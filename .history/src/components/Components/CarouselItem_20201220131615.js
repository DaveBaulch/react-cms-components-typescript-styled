import React from 'react';
import '../../sass/components/_carousel-item.scss';

const CarouselItem = ({ item }) => {
  return (
    <article className="carousel__item">
      <div className="carousel__wrapper">
        <div className="carousel__background picturefill-background is-lazy">
          <span
            className="picturefill-background-source"
            data-src={item.imgSrc1}
          ></span>
          <span
            class="picturefill-background-source"
            data-src={item.imgSrc2}
            data-media="(min-width: 576px)"
          ></span>
          <span
            class="picturefill-background-source"
            data-src={item.imgSrc3}
            data-media="(min-width: 768px)"
          ></span>
          <span
            class="picturefill-background-source"
            data-src={item.imgSrc4}
            data-media="(min-width: 992px)"
          ></span>
        </div>

        <div class="container">
          <div class="carousel__content">
            <h2 class="carousel__heading">{item.title}</h2>
            <div
              class="carousel__body"
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
