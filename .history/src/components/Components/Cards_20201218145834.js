import React from 'react';
import Card from './Card';
import '../../sass/components/_cards.scss';

const Cards = (props) => {
  console.log('cards:' + props.data.cards);

  if (props.data.cards) {
  const cards = props.data.cards;
  const renderedCardList = cards.map((card) => {
    return (
      <li className="card-list__item" key="card.id">
        <Card className="item" card={card} />
      </li>
    );
  });

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
