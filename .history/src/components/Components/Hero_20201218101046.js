import React from 'react';

const Hero = (props) => {
  return (
    <article className="section banner-block">
      <div className="banner">
        <div className="banner__background picturefill-background is-lazy">
          <span claclassNamess="picturefill-background-source" src="block.content.imgSrc1"></span>
          <span
            class="picturefill-background-source"
            src="block.content.imgSrc2"
            data-media="(min-width: 576px)"
          ></span>
          <span
            class="picturefill-background-source"
            src="block.content.imgSrc3"
            data-media="(min-width: 768px)"
          ></span>
          <span
            class="picturefill-background-source"
            src="block.content.imgSrc4"
            data-media="(min-width: 992px)"
          ></span>
        </div>

        <div class="container">
          <div class="banner__content">
            <div class="banner__inner">
              <h1 class="banner__heading">{{ block.content.title }}</h1>

            <div class="banner__text">
              banner text
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </article>

  );
};

export default Hero;
