import React from 'react';
import Card from '../Card';
import './Cards.scss';
import useData from '../../hooks/useData';
import Spinner from '../Spinner';

const Cards = () => {
  const [data, isLoading, isError] = useData('data/cards-data.json');
  const { title, cards } = data;

  console.log()

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <div className="loading-error">
        <p>Oops - something went wrong ...</p>
      </div>
    );
  }

  return (
    <article className="section card-list-block">
      <div className="container">
        <div className="card-list">
          <div className="card-list__heading">
            <h2>{title}</h2>
          </div>
          <ol className="card-list__list">
            {cards &&
              cards.map((card) => {
                return (
                  <li className="card-list__item" key={card.id}>
                    <Card className="item" card={card} />
                  </li>
                );
              })}
          </ol>
        </div>
      </div>
    </article>
  );
};

export default Cards;
