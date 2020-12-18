import React from 'react';
import '../../sass/components/_card.scss';

const Card = ({ card }) => {
  return (
    <article
      aria-label="Example showing an article title over two lines here"
      className="card"
    >
      <p className={`card__badge ${card.tagClass}`}>{card.tag}</p>
      <div className="card__img-holder">
        <picture>
          <source srcset={card.imgSrc} media="(min-width: 1024px)" />
          <source srcset={card.imgSrc media="(min-width: 768px)" />
          <source srcset={card.imgSrc" media="(min-width: 576px)" />
          <source srcset={card.imgSrc media="(min-width: 0px)" />
          <img
            src={itemData.imgSrc}
            alt=""
            className="card__img img-responsive"
          />
        </picture>
      </div>
      <div className="card__content">
        <div className="card__inner">
          <h3 className="card__title">
            <a href={card.link}>{card.title}</a>
          </h3>
          <p className="card__date">{card.date}</p>
          <div className="card__description"></div>
        </div>
      </div>
    </article>
  );
};

export default Card;
