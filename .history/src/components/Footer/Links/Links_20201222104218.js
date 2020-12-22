import React from 'react';
import './NavLinks.scss';

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

export default FooterLinks;
