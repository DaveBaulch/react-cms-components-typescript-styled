import React from 'react';
import '../../sass/components/_sectors-item.scss';

const SectorsItem = () => {
  return (
    <article div class="sectors-block">
      <div class="sectors-block__image picturefill-background is-lazy">
        <span class="picturefill-background-source" :data-src="itemData.imgSrc" data-media="(min-width: 0px)"></span>        
        <div class="sectors-block__title">
          <h3 class="sectors-block__heading">{{ itemData.title }}</h3>
        </div>
        <div class="sectors-block__text">
          <div class="sectors-block__inner">
            <h2 class="sectors-block__heading" role="presentation">{{ itemData.title }}</h2>
            <div v-html="itemData.text"></div>
          </div>
        </div>
      </div>
    </article>    
  );
};

export default SectorsItem;
