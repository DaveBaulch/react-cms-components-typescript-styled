import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CarouselItem from './CarouselItem';
import '../../sass/components/_carousel.scss';

const Carousel = () => {
  return (
    <section class="section carousel-block" >
      <VueSlickCarousel class="carousel">

        <AppCarouselItem />

      </VueSlickCarousel>

      <button role="button" aria-label="Play carousel">{ btnText }</button>

    </section>
  );
};

export default Carousel;
