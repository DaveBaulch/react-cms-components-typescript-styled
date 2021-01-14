import React from 'react';
import PropTypes from 'prop-types';
import './SectorsItem.scss';

const SectorsItem = ({ data: { imgSrc, title, text } }) => (
  <article className="sectors-block">
    <div className="sectors-block__image picturefill-background is-lazy">
      <span
        className="picturefill-background-source"
        data-src={imgSrc}
        data-media="(min-width: 0px)"
      ></span>
      <div className="sectors-block__title">
        <h3 className="sectors-block__heading">{title}</h3>
      </div>
      <div className="sectors-block__text">
        <div className="sectors-block__inner">
          <h2 className="sectors-block__heading" role="presentation">
            {title}
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html: text
            }}
          ></div>
        </div>
      </div>
    </div>
  </article>
);

SectorsItem.propTypes = {
  date: object.shape({
    imgSrc: propTypes
  })
};

export default SectorsItem;
