import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import CarouselItem from './CarouselItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../sass/components/_carousel.scss';

const Carousel = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get('data/cta-data.json');
    setData(data);
    new lazyloadPicturefillBackground();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section class="section carousel-block">
      <Slider class="carousel" {...settings}>
        <CarouselItem />
      </Slider>

      <button role="button" aria-label="Play carousel">
        {data.btnText}
      </button>
    </section>
  );
};

export default Carousel;
