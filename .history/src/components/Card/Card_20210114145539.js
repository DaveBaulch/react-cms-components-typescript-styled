import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({ card: { id,, ...restProps } }) => (
  <article
    aria-label="Example showing an article title over two lines here"
    className="card"
  >
    <p className={`card__badge ${tagClass}`}>{tag}</p>
    <div className="card__img-holder">
      <picture>
        <source srcSet={imgSrc} media="(min-width: 1024px)" />
        <source srcSet={imgSrc} media="(min-width: 768px)" />
        <source srcSet={imgSrc} media="(min-width: 576px)" />
        <source srcSet={imgSrc} media="(min-width: 0px)" />
        <img src={imgSrc} alt={link} className="card__img img-responsive" />
      </picture>
    </div>
    <div className="card__content">
      <div className="card__inner">
        <h3 className="card__title">
          <a href={link}>{title}</a>
        </h3>
        <p className="card__date">{date}</p>
        <div className="card__description"></div>
      </div>
    </div>
  </article>
);

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    tagClass: PropTypes.string,
    tag: PropTypes.string,
    imgSrc: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string
  })
};

export default Card;
