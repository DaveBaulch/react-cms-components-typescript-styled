import React from 'react';
import { useState, useEffect } from 'react';

const Sidenav = () => {
  return (
    <div className="sidenav-container">
  <div
    v-if="show"
    className="sidenav-backdrop"
    @click="$emit('close')">
    </div>

    <div
      class="sidenav">
      <h2>Components</h2>
      <ul
        class="nav-list"
        <li class="nav-item"><router-link to="/hero" class="component-list__link">Hero</router-link></li>
        <li class="nav-item"><router-link to="/carousel" class="component-list__link">Carousel</router-link></li>
        <li class="nav-item"><router-link to="/sectors" class="component-list__link">Sectors</router-link></li>
        <li class="nav-item"><router-link to="/cards" class="component-list__link">Cards</router-link></li>
        <li class="nav-item"><router-link to="/cta" class="component-list__link">CTA</router-link></li>
        <li class="nav-item"><router-link to="/quote" class="component-list__link">Quote</router-link></li>
        <li class="nav-item"><router-link to="/text" class="component-list__link">Text</router-link></li>
        <li class="nav-item"><router-link to="/accordion" class="component-list__link">Accordion</router-link></li>
      </ul>

      <h2>Pages</h2>
      <ul
        class="nav-list"
        <li class="nav-item"><router-link to="test-page">Test page</router-link></li>
        <li class="nav-item"><router-link to="test-page2">Test page 2</router-link></li>
      </ul>      
    </div>
  </transition>
</div>
  )
};

export default Sidenav;
