import React from 'react';
import { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
import Slider from 'react-slick';
import '../../css/slick.css';
import CarouselItem from '../CarouselItem';
import './Carousel.scss';
import lazyloadPicturefillBackground from 'lazyload-picturefill-background';
import useData from '../../hooks/useData';

const Carousel = () => {
  const [data] = useData('data/hero-data.json');
  console.log(data);
  // const [data, setData] = useState([]);
  const [paused, setPause] = useState(false);
  const carouselRef = useRef();

  // const getData = async () => {
  //   const { data } = await axios.get('data/carousel-data.json');
  //   setData(data);
  //   new lazyloadPicturefillBackground();
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  useEffect(() => {
    new lazyloadPicturefillBackground();
  }, [data]);

  const { items } = data.items;

  const onPauseClick = () => {
    setPause(!paused);

    if (paused) {
      carouselRef.current.slickPlay();
    } else {
      carouselRef.current.slickPause();
    }
  };

  const settings = {
    dots: true,
    dotsClass: 'slick-dots custom-dot-class',
    edgeFriction: 0.35,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    pauseOnFocus: false,
    autoplay: true,
    adaptiveHeight: true
  };

  return (
    <section className="section carousel-block">
      <Slider ref={carouselRef} className="carousel" {...settings}>
        {items &&
          items.map((item) => {
            return <CarouselItem item={item} key={item.id} />;
          })}
      </Slider>

      <button
        className={paused ? 'carousel-play-btn is-paused' : 'carousel-play-btn'}
        aria-label="Play carousel"
        onClick={onPauseClick}
      >
        {paused ? 'Play' : 'Pause'}
      </button>
    </section>
  );
};

export default Carousel;
