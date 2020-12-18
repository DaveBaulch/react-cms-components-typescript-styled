import React from 'react';
import { Link } from 'react-router-dom';

const IndexPage = () => {
  return (
    <div class="home">
      <div class="container">
        <h2>Components</h2>
        <ul className="nav-list">
          <li></li><Link to="/hero" className="nav-item">
            Hero
          </Link>
          <li></li><Link to="/carousel" className="nav-item">
            Carousel
          </Link>
          <li>><Link to="/cards" className="nav-item">
            Cards
          </Link></li
          <li>><Link to="/cta" className="nav-item">
            CTA
          </Link></li
          <li>><Link to="/quote" className="nav-item">
            Quote
          </Link></li
          <li><Link to="/text" className="nav-item">
            Text
          </Link></li>
        </ul>
      </div>
    </div>
  );
};

export default IndexPage;
