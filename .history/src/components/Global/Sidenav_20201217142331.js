import React from 'react';
import { useState, useEffect } from 'react';

const Sidenav = () => {
  return (
    <div className="sidenav-container">
      
      <div className="sidenav-backdrop"></div>

      <div className="sidenav">
        <h2>Components</h2>
        <ul
          className="nav-list"
          <li className="nav-item">Hero</li>
          <li className="nav-item">Carousel</router-link></li>
          <li className="nav-item">Sectors</router-link></li>
          <li className="nav-item">Cards</router-link></li>
          <li className="nav-item">>CTA</router-link></li>
          <li className="nav-item"><router-link to="/quote" className="component-list__link">Quote</router-link></li>
          <li className="nav-item"><router-link to="/text" className="component-list__link">Text</router-link></li>
          <li className="nav-item"><router-link to="/accordion" className="component-list__link">Accordion</router-link></li>
        </ul>

        <h2>Pages</h2>
        <ul
          className="nav-list"
          <li className="nav-item">Test page</li>
          <li className="nav-item">Test page 2<></li>
        </ul>      
      </div>
      
    </div>
  )
};

export default Sidenav;
