import React from 'react';
import { useEffect } from 'react';
import SectorsItem from '../SectorsItem';
import './Sectors.style.js';
import lazyloadPicturefillBackground from 'lazyload-picturefill-background';
import useData from '../../hooks/useData';
import Spinner from '../Spinner';
import Container from '../Container';
import { Styled } from './Container.style';

const Sectors = () => {
  const [data, isLoading, isError] = useData('data/sectors-data.json');

  useEffect(() => {
    if (data) {
      new lazyloadPicturefillBackground();
    }
  }, [data, isLoading, isError]);

  const { title, sectors } = data;

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
    <section>
      <Container>
        <h2 className="sectors-panel__title">{title}</h2>
        <div className="row">
          {sectors &&
            sectors.map((sector) => {
              return (
                <SectorsItem className="item" data={sector} key={sector.id} />
              );
            })}
        </div>
      </Container>
    </section>
  );
};

export default Sectors;
