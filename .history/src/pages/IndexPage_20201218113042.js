import React from 'react';
import { Link } from 'react-router-dom';

const IndexPage = () => {
  return (
    <div class="home">
      <div class="container">
        <h2>Components</h2>
        <ul className="nav-list">
          <Link to="/hero" className="nav-item">
            Hero
          </Link>
          <Link to="/hero" className="nav-item">
            Carousel
          </Link>
          <Link to="/hero" className="nav-item">
            Cards
          </Link>
          <Link to="/hero" className="nav-item">
            CTA
          </Link>
          <Link to="/hero" className="nav-item">
            Quote
          </Link>
          <Link to="/hero" className="nav-item">
            Hero
          </Link>
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
      </div>
    </div>
  );
};

export default IndexPage;
