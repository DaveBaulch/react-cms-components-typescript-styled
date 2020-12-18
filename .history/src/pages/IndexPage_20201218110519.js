import React from 'react';
import { Link } from 'react-router-dom';

const IndexPage = () => {
  return (
    <div></div>
    <ul className="nav-list">
      <Link to="/hero" className="nav-item">
        Hero
      </Link>
      <li className="nav-item">Carousel</li>
      <li className="nav-item">Sectors</li>
      <li className="nav-item">Cards</li>
      <li className="nav-item">CTA</li>
      <li className="nav-item">Quote</li>
      <li className="nav-item">Text</li>
    </ul>
  );
};

export default IndexPage;
