import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
  return (
    <ul className="navigation">
      <li className="navigation__item">
        <Link to="/hero" className="navigation__link">
          Hero
        </Link>
      </li>
      <li className="navigation__item">
        <Link to="/carousel" className="navigation__link__link">
          Carousel
        </Link>
      </li>
      <li className="navigation__item">
        <Link to="/cards" className="navigation__link__link">
          Cards
        </Link>
      </li>
      <li className="navigation__item">
        <Link to="/sectors" className="navigation__link__link">
          Sectors
        </Link>
      </li>
      <li className="navigation__item">
        <Link to="/cta" className="navigation__link__link">
          CTA
        </Link>
      </li>
      <li className="navigation__item">
        <Link to="/quote" className="navigation__link__link">
          Quote
        </Link>
      </li>
      <li className="navigation__item">
        <Link to="/text" className="component-list__link">
          Text
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
