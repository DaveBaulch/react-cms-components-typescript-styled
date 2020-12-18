import React from 'react';
import Card from './Card';
import '../../sass/components/_cards.scss';

const Cards = (props) => {
  console.log('cards:' + props.data.cards);

  let renderedCardList = '';
  if (cards) {
    renderedCardList = cards.map((card) => {
      return (
        <li className="card-list__item" key="card.id">
          <Card className="item" card={card} />
        </li>
      );
    });
  }

  return (
    <article className="section card-list-block">
      <div className="container">
        <div className="card-list">
          <div className="card-list__heading">
            <h2>{props.data.title}</h2>
          </div>
          <ol className="card-list__list">{renderedCardList}</ol>
        </div>
      </div>
    </article>
  );
};

export default Cards;
