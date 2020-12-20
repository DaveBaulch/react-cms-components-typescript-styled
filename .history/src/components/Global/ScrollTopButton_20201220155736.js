import React from 'react';

const ScrollTopButton = () => {
  return (
    <a class="btn-scroll-top" : class="{ active: buttonVisible }"
      ref="scroll-button" id="scroll-top" href="#skip-navigation" v-scroll-to="{el: '#skip-navigation', onDone: onDone}">
    <slot />
  </a>
  );
};

export default ScrollTopButton;

