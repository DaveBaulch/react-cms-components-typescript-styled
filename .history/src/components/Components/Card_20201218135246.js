import React from 'react';
import '../../sass/components/_card.scss';

const Card = () => {

  return (
    <article aria-label="Example showing an article title over two lines here" className="card js-card">
      <p className="card__badge" :class="itemData.tagClass" v-if="itemData.tag">{{ itemData.tag }}</p>
      <div className="card__img-holder">
        <picture>
          <source :srcset="itemData.imgSrc" media="(min-width: 1024px)">
          <source :srcset="itemData.imgSrc" media="(min-width: 768px)">
          <source :srcset="itemData.imgSrc" media="(min-width: 576px)">
          <source :srcset="itemData.imgSrc" media="(min-width: 0px)">
          <img :src="itemData.imgSrc" alt="" className="card__img img-responsive">
        </picture>
      </div>
      <div className="card__content">
        <div className="card__inner">
          <h3 className="card__title"><a :href="itemData.link">{{ itemData.title }}</a></h3>
          <p className="card__date">{{ itemData.date }}</p>
          <div className="card__description" v-html="itemData.text"></div>
        </div>
      </div>
    </article>
  );
};

export default Card;