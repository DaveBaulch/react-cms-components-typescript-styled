import React from 'react';
import PropTypes from 'prop-types';
import './NavLinks.scss';

const NavLinks = ({ data }) => {
  const renderedLinks = data.map((link) => {
    return (
      <li className="footer-nav__item" key={link.id}>
        <a href={link.link} className="footer-nav__link">
          {link.title}
        </a>
      </li>
    );
  });

  return <ol className="footer-nav">{renderedLinks}</ol>;
};

NavLinks.propTypes = {
  data: PropTypes.array.isRequired
};

export default NavLinks;
