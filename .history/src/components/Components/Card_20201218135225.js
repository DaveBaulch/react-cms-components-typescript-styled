import React from 'react';
import '../../sass/components/_card.scss';

const Card = () => {

  return (
    <article aria-label="Example showing an article title over two lines here" classname="card js-card">
      <p class="card__badge" :class="itemData.tagClass" v-if="itemData.tag">{{ itemData.tag }}</p>
      <div class="card__img-holder">
        <picture>
          <source :srcset="itemData.imgSrc" media="(min-width: 1024px)">
          <source :srcset="itemData.imgSrc" media="(min-width: 768px)">
          <source :srcset="itemData.imgSrc" media="(min-width: 576px)">
          <source :srcset="itemData.imgSrc" media="(min-width: 0px)">
          <img :src="itemData.imgSrc" alt="" class="card__img img-responsive">
        </picture>
      </div>
      <div class="card__content">
        <div class="card__inner">
          <h3 class="card__title"><a :href="itemData.link">{{ itemData.title }}</a></h3>
          <p class="card__date">{{ itemData.date }}</p>
          <div class="card__description" v-html="itemData.text"></div>
        </div>
      </div>
    </article>
  );
};

export default Card;
