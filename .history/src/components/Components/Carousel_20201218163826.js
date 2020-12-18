import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CarouselItem from './CarouselItem';
import '../../sass/components/_carousel.scss';

const Carousel = () => {
  return (
    <section class="section carousel-block" v-if="blockData">
      <VueSlickCarousel v-bind="settings" class="carousel" ref="carousel">

        <AppCarouselItem v-for="item in blockData" :key="item.id" :itemData="item" />

      </VueSlickCarousel>

      <button @click="togglePause()" :class="isPaused ? 'carousel-play-btn is-paused' : 'carousel-play-btn'" role="button" aria-label="Play carousel">{{ btnText }}</button>

  </section>
  );
};

export default Carousel;
