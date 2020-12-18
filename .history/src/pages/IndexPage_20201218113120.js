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
          <Link to="/carousel" className="nav-item">
            Carousel
          </Link>
          <Link to="/cards" className="nav-item">
            Cards
          </Link>
          <Link to="/cta" className="nav-item">
            CTA
          </Link>
          <Link to="/quote" className="nav-item">
            Quote
          </Link>
          <Link to="/text" className="nav-item">
            Text
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default IndexPage;
