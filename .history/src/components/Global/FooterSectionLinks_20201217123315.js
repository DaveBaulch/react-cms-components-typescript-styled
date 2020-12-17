import React from 'react';

const FooterLinks = (props) => {
  // console.log(props.data);

  const renderedLinks = props.data.map((link) => {
    return (
      <li className="footer-links__item" key={link.id}>
        <a href={link.link}>{link.title}</a>
      </li>
    );
  });

  return <ol className="footer-nav">{renderedLinks}</ol>;
};

export default FooterLinks;
