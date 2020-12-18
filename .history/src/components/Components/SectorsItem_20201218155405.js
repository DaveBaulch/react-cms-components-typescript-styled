import React from 'react';
import '../../sass/components/_sectors-item.scss';

const SectorsItem = (props) => {
  return (
    <article className="sectors-block">
      <div className="sectors-block__image picturefill-background is-lazy">
        <span className="picturefill-background-source" data-src="itemData.imgSrc" data-media="(min-width: 0px)"></span>        
        <div className="sectors-block__title">
          <h3 className="sectors-block__heading">{ props.title }}</h3>
        </div>
        <div class="sectors-block__text">
          <div class="sectors-block__inner">
            <h2 class="sectors-block__heading" role="presentation">{props.title}}</h2>
            <div v-html="itemData.text"></div>
          </div>
        </div>
      </div>
    </article>    
  );
};

export default SectorsItem;
