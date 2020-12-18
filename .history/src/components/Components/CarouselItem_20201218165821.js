import React from 'react';
import '../../sass/components/_carousel-item.scss';

const CarouselItem = ({item}) => {
  return (
    <article class="carousel__item">
      <div class="carousel__wrapper">  
        <div class="carousel__background picturefill-background is-lazy">
          <span class="picturefill-background-source" :data-src="itemData.imgSrc1"></span>
          <span
            class="picturefill-background-source"
            :data-src="itemData.imgSrc2"
            data-media="(min-width: 576px)"
          ></span>
          <span
            class="picturefill-background-source"
            :data-src="itemData.imgSrc3"
            data-media="(min-width: 768px)"
          ></span>
          <span
            class="picturefill-background-source"
            :data-src="itemData.imgSrc4"
            data-media="(min-width: 992px)"
          ></span>
        </div>

        <div class="container">
          <div class="carousel__content">
            <h2 class="carousel__heading">{{ itemData.title }}</h2>
            <div class="carousel__body" v-html="itemData.text">
            </div>
            <BaseLink 
              :text="itemData.btnText" 
              to="/about" 
              type="router-link" 
              class="carousel__button" 
              v-if="itemData" 
            />
          </div>
        </div>
      </div>
    </article>
  )
};

export default CarouselItem;
