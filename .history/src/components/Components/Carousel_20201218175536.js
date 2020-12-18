import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
import '../../css/slick.css';
import CarouselItem from './CarouselItem';
import '../../sass/components/_carousel.scss';
import lazyloadPicturefillBackground from 'lazyload-picturefill-background';

const Carousel = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get('data/carousel-data.json');
    setData(data);
    new lazyloadPicturefillBackground();
  };

  useEffect(() => {
    getData();
  }, []);


  const onPauseClick = () => {
    
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
      <Slider className="carousel" {...settings}>
        {data.items &&
          data.items.map((item) => {
            return <CarouselItem item={item} />;
          })}
      </Slider>

      <button aria-label="Play carousel" onClick={onPauseClick }>{data.btnText}</button>
    </section>
  );
};

export default Carousel;
