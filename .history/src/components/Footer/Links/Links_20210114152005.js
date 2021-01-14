import React from 'react';
import PropTypes from 'prop-types';
import './Links.scss';

const FooterLinks = ({ data }) => {
  const renderedLinks = data.map((link) => {
    return (
      <li className="footer-links__item" key={link.id}>
        <a href={link.link}>{link.title}</a>
      </li>
    );
  });

  return <ul className="footer-links">{renderedLinks}</ul>;
};

FooterLinks.propTypes = {
  data: PropTypes.any
};

export default FooterLinks;
