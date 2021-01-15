import React from 'react';
import Card from '../Card';
import './Cards.scss';
import useData from '../../hooks/useData';
import Spinner from '../Spinner';
import Container from '../Container';

const Cards = () => {
  const [data, isLoading, isError] = useData('data/cards-data.json');
  const { title, cards } = data;

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
      <Container>
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
      </Container>
    </article>
  );
};

export default Cards;
