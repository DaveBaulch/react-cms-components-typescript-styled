import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
import '../../css/slick.css';
import CarouselItem from './CarouselItem';
import '../../sass/components/_carousel.scss';
import lazyloadPicturefillBackground from 'lazyload-picturefill-background';

const Carousel = () => {
  const [data, setData] = useState([]);
  const [paused, setPause] = useState(false);
  const carouselRef = useRef();

  const getData = async () => {
    const { data } = await axios.get('data/carousel-data.json');
    setData(data);
    new lazyloadPicturefillBackground();
  };

  useEffect(() => {
    getData();
  }, []);

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
        {data.items &&
          data.items.map((item) => {
            return <CarouselItem item={item} key/>;
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
